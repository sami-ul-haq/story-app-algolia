import { useState } from "react";
import { useGlobalContext } from "./GlobalContext";

const SearchBar = () => {
  const { searchQuery } = useGlobalContext();
  const [userQuery, setUserQuery] = useState("");

  const queryHandler = (e) => {
    e.preventDefault();
    searchQuery(userQuery);
    setUserQuery("");
  };

  return (
    <div className="search-bar">
      <form onSubmit={queryHandler}>
        <input
          type="text"
          placeholder="Search the Stories..."
          value={userQuery}
          onChange={(e) => setUserQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
