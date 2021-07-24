import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Header from './Components/Header/Header';
import Listings from './Components/Listings/Listings';

function App() {
  const [listings, setListings] = useState([]);
  const [availableChecked, setAvailableChecked] = useState(false);
  const [propertyType, setPropertyType] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalListing, setModalListing] = useState();

  const modalHandler = (e, listing) => {
    document.body.style.overflow = 'hidden';
    setModalListing(listing);
    setModalIsOpen(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      const results = await axios(
        'https://my-json-server.typicode.com/zappyrent/frontend-assessment/properties',
      );
      if (availableChecked && propertyType.length === 0) {
        setListings(
          results.data.filter((result) => result.available === true),
        );
      } else if (availableChecked && propertyType.length > 0) {
        setListings(
          results.data.filter(
            (result) =>
              result.available === true &&
              propertyType.includes(result.type),
          ),
        );
      } else if (!availableChecked && propertyType.length > 0) {
        setListings(
          results.data.filter((result) =>
            propertyType.includes(result.type),
          ),
        );
      } else {
        setListings(results.data);
      }
    };
    fetchData();
  }, [availableChecked, propertyType]);

  return (
    <div className="App">
      <Header
        listings={listings}
        setAvailableChecked={setAvailableChecked}
        propertyType={propertyType}
        setPropertyType={setPropertyType}
        modalIsOpen={modalIsOpen}
      />
      <Listings
        listings={listings}
        modalHandler={modalHandler}
        modalListing={modalListing}
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        availableChecked={availableChecked}
      />
    </div>
  );
}

export default App;
