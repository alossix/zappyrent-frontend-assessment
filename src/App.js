import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Header from './Components/Header/Header';
import Listings from './Components/Listings/Listings';

function App() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://my-json-server.typicode.com/zappyrent/frontend-assessment/properties',
      );
      setListings(result.data);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <Header listings={listings} />
      <Listings listings={listings} />
    </div>
  );
}

export default App;
