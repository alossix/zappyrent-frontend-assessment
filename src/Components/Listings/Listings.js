import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Listings = () => {
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
    <div>
      {listings.map((listing) => (
        <>
          <p>{listing.id}</p>
          <img src={listing.images[0].url} />
        </>
      ))}
    </div>
  );
};

export default Listings;
