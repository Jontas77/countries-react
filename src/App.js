import { useState } from "react";
import "./styleSheets/App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CountriesData from "./data/countriesAll.json";

//Components
import Header from "./components/Header";
import Search from "./components/Search";
// import SearchPage from "./components/SearchPage";
import Countries from "./components/CountriesAll";
import Country from "./components/Country";

function App() {
  const [searchValue, setSearcValue] = useState("");
  const [filter, setFilter] = useState(["All"]);

  const handleSearch = (e) => {
    setSearcValue(e.target.value);
  };

  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  return (
    <Router>
        <Header />
        <Route exact path="/">
          <Search
            data={CountriesData}
            searchValue={searchValue}
            handleSearch={handleSearch}
            handleFilter={handleFilter}
          />
          {/* <SearchPage
            data={CountriesData}
            searchValue={searchValue}
            filter={filter}
          /> */}
          <Countries />
        </Route>
      <Route path="/countries/:name" children={<Country />}></Route>
    </Router>
  );
}

export default App;
