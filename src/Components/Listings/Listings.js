import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ListingCard from './ListingCard/ListingCard';

import { ListingsContainer } from './style';

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
    <ListingsContainer>
      {listings.map((listing) => (
        <ListingCard
          listingId={listing.id}
          image={listing.images[0].url}
          type={listing.type}
          title={listing.title}
          tenants={listing.tenants}
          baths={listing.baths}
          beds={listing.beds}
          description={listing.description}
          price={listing.price}
        />
      ))}
    </ListingsContainer>
  );
};

export default Listings;
