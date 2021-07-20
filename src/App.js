import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Header from './Components/Header/Header';
import Listings from './Components/Listings/Listings';

function App() {
  const [listings, setListings] = useState([]);
  const [availableChecked, setAvailableChecked] = useState(false);
  const [propertyType, setPropertyType] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://my-json-server.typicode.com/zappyrent/frontend-assessment/properties',
      );
      if (availableChecked && propertyType === '') {
        setListings(result.data.filter((r) => r.available === true));
      } else if (availableChecked && propertyType !== '') {
        setListings(
          result.data.filter(
            (r) => r.available === true && r.type === propertyType,
          ),
        );
      } else if (!availableChecked && propertyType !== '') {
        setListings(
          result.data.filter((r) => r.type === propertyType),
        );
      } else {
        setListings(result.data);
      }
    };
    fetchData();
  }, [availableChecked, propertyType]);

  return (
    <div className="App">
      <Header
        listings={listings}
        setAvailableChecked={setAvailableChecked}
        setPropertyType={setPropertyType}
      />
      <Listings
        listings={listings}
        availableChecked={availableChecked}
        propertyType={propertyType}
      />
    </div>
  );
}

export default App;
