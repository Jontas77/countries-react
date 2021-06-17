import './styleSheets/App.css';
import CountriesData from "./data/countriesAll.json";

//Components
import Header from "./components/Header";
import CountriesAll from './components/CountriesAll';

function App() {
  return (
    <div className="container-countries m-0 p-0">
      <Header />
      <CountriesAll data={CountriesData} />
    </div>
  );
};

export default App;
