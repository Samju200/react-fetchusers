import React from 'react';

const SelectCountry = ({ countries }) => {
  return (
    <select name="country" id="" placeholder="Country">
      {countries.map((country) => {
        const { name, unicodeFlag } = country;
        return (
          <option value={name} placeholder="Country">
            {unicodeFlag}  {name}
          </option>
        );
      })}
    </select>
  );
};

export default SelectCountry;
