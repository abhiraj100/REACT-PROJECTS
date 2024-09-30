import "./App.css";
import CountriesList from "./Components/CountriesList";
import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";
import SelectMenu from "./Components/SelectMenu";

function App() {
  return (
    <>
      <Header />
      <main>
      <div className="search-filter-container">
        <SearchBar />
        <SelectMenu />
      </div>
      <CountriesList />
      </main>
    </>
  );
}

export default App;
