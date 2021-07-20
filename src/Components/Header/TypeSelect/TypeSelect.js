import React from 'react';

const TypeSelect = ({ propertyType, setPropertyType }) => {
  const propertyTypeArr = propertyType.map((p) => p);

  const changePropertyType = (event) => {
    if (event.target.checked) {
      propertyTypeArr.push(event.target.value);
      setPropertyType(propertyTypeArr);
    } else {
      propertyTypeArr.splice(
        propertyTypeArr.indexOf(event.target.value),
        1,
      );
      setPropertyType(propertyTypeArr);
    }
  };

  const values = [
    'Private Room',
    'Entire Property',
    'Shared Room',
    'Studio',
  ];

  return (
    <>
      {values.map((val, index) => (
        <label key={index}>
          <input
            type="checkbox"
            value={val}
            onChange={changePropertyType}
          />
          {val}
        </label>
      ))}
    </>
  );
};

export default TypeSelect;
