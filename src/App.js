import { useState } from "react";
import "./styleSheets/App.css";
import CountriesData from "./data/countriesAll.json";

//Components
import Header from "./components/Header";
import Search from "./components/Search";
import SearchPage from "./components/SearchPage";

function App() {
  const [searchValue, setSearcValue] = useState("");
  // const [countryList, setCountryList] = useState([]);
  const [filter, setFilter] = useState(["All"]);

  const handleSearch = (e) => {
    setSearcValue(e.target.value);
  };

  const handleFilter = (e) => {
    setFilter(e.target.value);
  }

  return (
    <div className="container-countries m-0 p-0">
      <Header />
      <Search
        data={CountriesData}
        searchValue={searchValue}
        handleSearch={handleSearch}
        handleFilter={handleFilter}
      />
      <SearchPage data={CountriesData} searchValue={searchValue} filter={filter} />
    </div>
  );
}

export default App;
