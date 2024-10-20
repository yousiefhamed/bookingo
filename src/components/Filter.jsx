import { useEffect, useState } from "react";
import Rating from "./utils/Rating";
import { FaSackDollar, FaSortDown, FaStar } from "react-icons/fa6";
import { MdCategory } from "react-icons/md";
import { FaSortAmountDown } from "react-icons/fa";
import "./../styles/filter.css";
import { useNavigate } from "react-router-dom";

const Filter = () => {
  const [genres, setGenres] = useState([]);
  const [rating, setRating] = useState([]);
  const [prices, setPrices] = useState([0, 100]);
  const [sort, setSort] = useState("title");
  const [sortDir, setSortDir] = useState("asc");

  const [genresarr] = useState([
    "Fiction",
    "Non-Fiction",
    "Mystery",
    "Romance",
    "Science Fiction",
    "Fantasy",
    "Thriller",
    "Historical Fiction",
    "Biography",
    "Self-Help",
    "Poetry",
    "Children's",
    "Young Adult",
    "Graphic Novel",
    "Cookbook",
    "Travel",
    "Art",
    "History",
    "Philosophy",
    "Religion",
    "Science",
    "Technology",
    "Business",
    "Health",
    "Sports",
    "Music",
    "Film",
    "Theater",
    "Comics",
    "Magazine",
    "Encyclopedia",
    "Dictionary",
    "Almanac",
    "Atlas",
    "Guidebook",
    "Journal",
    "Memoir",
    "Narrative",
    "Novel",
    "Short Story",
    "Essay",
    "Speech",
  ]);
  const [sortOptions] = useState([
    {
      label: "Price",
      value: "price",
    },
    {
      label: "Rating",
      value: "rating",
    },
    {
      label: "Title",
      value: "title",
    },
  ]);

  const [showFilter, setShowFilter] = useState(false);
  const [showRating, setShowRating] = useState(false);
  const [showPrice, setShowPrice] = useState(false);
  const [showSort, setShowSort] = useState(false);

  const [filterParams, setFilterParams] = useState("");
  const navigate = useNavigate();

  const handleGenreChange = (selectedGenre) => {
    setGenres((prevGenre) =>
      prevGenre.includes(selectedGenre)
        ? prevGenre.filter((genre) => genre !== selectedGenre)
        : [...prevGenre, selectedGenre]
    );
  };
  const handleRatingChange = (selectedRating) => {
    setRating((prevRates) =>
      prevRates.includes(selectedRating)
        ? prevRates.filter((rate) => rate !== selectedRating)
        : [...prevRates, selectedRating]
    );
  };
  const handleSortChange = (selectedSort) => {
    setSort(selectedSort);
  };

  useEffect(() => {
    setFilterParams(
      `genres=${genres.join(",")}&rating=${rating.join(
        ","
      )}&price=${prices.join(",")}&sort=${sort}&sortDir=${sortDir}`
    );
    navigate(`/books?${filterParams}`);
  }, [filterParams, genres, navigate, prices, rating, sort, sortDir]);

  return (
    <div className="filter">
      <div className="filter-container">
        <div className="filter-item">
          <MdCategory />
          <h2>Genre</h2>
          <button
            className={`filter-button ${showFilter ? "active" : ""}`}
            onClick={() => setShowFilter(!showFilter)}
          >
            <FaSortDown />
          </button>
          <div className={`filter-dropdown ${showFilter ? "show" : ""}`}>
            {genresarr.map((genre) => (
              <div key={genre} onClick={() => handleGenreChange(genre)}>
                <span className="checkbox">
                  {genres.includes(genre) ? "✓ " : ""}
                </span>
                <span>{genre}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="filter-item">
          <FaStar />
          <h2>Rating</h2>
          <button
            className={`filter-button ${showRating ? "active" : ""}`}
            onClick={() => setShowRating(!showRating)}
          >
            <FaSortDown />
          </button>
          <div className={`filter-dropdown ${showRating ? "show" : ""}`}>
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index} onClick={() => handleRatingChange(index + 1)}>
                <span className="checkbox">
                  {rating.includes(index + 1) ? "✓ " : ""}
                </span>
                <span className="small">({index + 1})</span>
                <Rating overallRating={index + 1} />
              </div>
            ))}
          </div>
        </div>
        <div className="filter-item">
          <FaSackDollar />
          <h2>Price</h2>
          <button
            className={`filter-button ${showPrice ? "active" : ""}`}
            onClick={() => setShowPrice(!showPrice)}
          >
            <FaSortDown />
          </button>
          <div className={`filter-dropdown ${showPrice ? "show" : ""}`}>
            <div className="price-range-container">
              <label>
                <span>min: </span>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={prices[0]}
                  onChange={(e) =>
                    setPrices((prev) => [Number(e.target.value), prev[1]])
                  }
                  className="price-range"
                />
              </label>
              <label>
                <span>max: </span>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={prices[1]}
                  onChange={(e) =>
                    setPrices((prev) => [prev[0], Number(e.target.value)])
                  }
                  className="price-range"
                />
              </label>
              <div className="border"></div>
              <div className="price-labels">
                <span>min: ${prices[0]}</span>
                <span>max: ${prices[1]}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="filter-container shrink">
        <div className="filter-item">
          <FaSortAmountDown />
          <h2>Sort By</h2>
          <button
            className="filter-button"
            onClick={() => setShowSort(!showSort)}
          >
            <FaSortDown />
          </button>
          <div className={`filter-dropdown ${showSort ? "show" : ""}`}>
            {sortOptions.map((option) => (
              <div
                key={option.value}
                onClick={() => handleSortChange(option.value)}
              >
                <span className="checkbox">
                  {sort === option.value ? "✓ " : ""}
                </span>
                <span>{option.label}</span>
              </div>
            ))}
            <div className="border"></div>
            <div onClick={() => setSortDir("asc")}>
              <span className="checkbox">{sortDir === "asc" ? "✓ " : ""}</span>
              <span>Ascending</span>
            </div>
            <div onClick={() => setSortDir("desc")}>
              <span className="checkbox">{sortDir === "desc" ? "✓ " : ""}</span>
              <span>Descending</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
