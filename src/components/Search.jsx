import { FaSearch } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { useFilterContext } from "../context/FilterContext";

const Search = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const { search, setSearch } = useFilterContext();

  const handleSearch = (searchWord) => {
    setSearch(searchWord);

    if (pathname !== "/books") {
      navigate(`/books`);
    }
  };

  return (
    <form onSubmit={(e) => e.preventDefault()} className="search-container">
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => handleSearch(e.target.value)}
        className="w-full py-2 px-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      <button type="submit">
        <FaSearch />
      </button>
    </form>
  );
};

export default Search;
