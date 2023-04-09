import "./App.css";
import Posts from "./compenents/Posts";
import SearchBar from "./SearchBar";

const App = () => {
  return (
    <div className="app">
      <header>
        <h1>Search The Stories Around The World</h1>
      </header>

      <SearchBar />
      <Posts />
    </div>
  );
};

export default App;
