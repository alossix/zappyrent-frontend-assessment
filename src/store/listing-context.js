import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ListingContext = React.createContext({
  listings: [],
  setListings: () => {},
  availableChecked: false,
  setAvailableChecked: () => {},
  availableCheckedHandler: () => {},
  propertyType: [],
  setPropertyType: () => {},
  menuIsOpen: false,
  setMenuIsOpen: () => {},
  menuClickHandler: () => {},
  menuText: () => {},
  changePropertyType: () => {},
  propertyTypes: [],
});

export const ListingContextProvider = (props) => {
  const [listings, setListings] = useState([]);
  const [propertyType, setPropertyType] = useState([]);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [availableChecked, setAvailableChecked] = useState(false);

  const availableCheckedHandler = (event) =>
    setAvailableChecked(event.target.checked);

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

  const propertyTypeArr = propertyType.map((p) => p);

  const menuClickHandler = () => {
    setMenuIsOpen((isOpen) => !isOpen);
  };

  const menuText = () => {
    if (menuIsOpen || propertyTypeArr.length === 0) {
      return 'Tipologia';
    } else if (propertyTypeArr.length === 1) {
      return `${propertyTypeArr[0]}`;
    } else {
      return `${propertyTypeArr[0]} +${propertyTypeArr.length - 1}`;
    }
  };

  const changePropertyType = (event) => {
    if (event.target.checked) {
      propertyTypeArr.push(event.target.name);
      setPropertyType(
        propertyTypeArr.sort(
          (a, b) =>
            propertyTypes.indexOf(a) - propertyTypes.indexOf(b),
        ),
      );
    } else {
      propertyTypeArr.splice(
        propertyTypeArr.indexOf(event.target.name),
        1,
      );
      setPropertyType(propertyTypeArr);
    }
  };

  const propertyTypes = [
    'Private Room',
    'Entire Property',
    'Shared Room',
    'Studio',
  ];

  return (
    <ListingContext.Provider
      value={{
        listings,
        setListings,
        availableChecked,
        setAvailableChecked,
        availableCheckedHandler,
        propertyType,
        setPropertyType,
        menuClickHandler,
        menuText,
        menuIsOpen,
        setMenuIsOpen,
        changePropertyType,
        propertyTypes,
      }}
    >
      {props.children}
    </ListingContext.Provider>
  );
};

export default ListingContext;
