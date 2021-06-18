import { useState } from "react";
import './styleSheets/App.css';
import CountriesData from "./data/countriesAll.json";

//Components
import Header from "./components/Header";
import Search from "./components/Search";
import SearchPage from "./components/SearchPage";
import CountriesAll from './components/CountriesAll';

function App() {
  const [searchValue, setSearcValue] = useState("");
  const [countryList, setCountryList] = useState([]);

  const handleSearch = (e) => {
    console.log(e.target.value)
    setSearcValue(e.target.value)
  }

  

  return (
    <div className="container-countries m-0 p-0">
      <Header />
      <Search  data={CountriesData} searchValue={searchValue} handleSearch={handleSearch} />
      <SearchPage data={CountriesData} searchValue={searchValue}  />
      <CountriesAll data={CountriesData} />
    </div>
  );
};

export default App;
