import React from "react";
import CountriesAll from "./CountriesAll";

const SearchPage = ({ data, searchValue, filter }) => {
  let filteredCountries = data.filter((country) => {
    let result;
    if (filter === "All") {
      result =
        country.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        country.capital.toLowerCase().includes(searchValue.toLowerCase());
    } else if (country.region === filter) {
      result =
        country.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        country.capital.toLowerCase().includes(searchValue.toLowerCase());
    }
    return result;
  });

  return <CountriesAll data={filteredCountries} />;
};

export default SearchPage;
