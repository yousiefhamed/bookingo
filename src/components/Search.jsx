import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate, useSearchParams } from "react-router-dom";

const Search = () => {
  const params = useSearchParams();
  const searchQuery = params[0].get("q");
  const [searchTerm, setSearchTerm] = useState(searchQuery || "");
  const navigate = useNavigate();

  useEffect(() => {
    setSearchTerm(searchQuery || "");
  }, [searchQuery]);

  const handleSearch = (e) => {
    e.preventDefault();
    let value = searchTerm.toLowerCase().trim();
    value = Array.from({ length: value.length })
      .map((_, i) => {
        if (value[i] === " " && value[i - 1] === " ") {
          return "";
        }
        return value[i];
      })
      .join("");
    setSearchTerm("");
    navigate(`/books?q=${value}`);
  };

  return (
    <form onSubmit={(e) => handleSearch(e)} className="search-container">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full py-2 px-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      <button type="submit">
        <FaSearch />
      </button>
    </form>
  );
};

export default Search;
