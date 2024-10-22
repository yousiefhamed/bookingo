import { useEffect, useState } from "react";
import Rating from "./utils/Rating";
import { FaSackDollar, FaSortDown, FaStar } from "react-icons/fa6";
import { MdCategory } from "react-icons/md";
import { FaSortAmountDown } from "react-icons/fa";
import { useFilterContext } from "../context/FilterContext";
import { TbTrashXFilled } from "react-icons/tb";
import "./../styles/filter.css";

const Filter = () => {
  const [isAnyFilterOpen, setIsAnyFilterOpen] = useState(false);

  const {
    genres,
    setGenres,
    rating,
    setRating,
    prices,
    setPrices,
    sort,
    setSort,
    sortDir,
    setSortDir,
  } = useFilterContext();

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

  const handleClearFilters = () => {
    setGenres(["all"]);
    setRating(["all"]);
    setPrices([0, 100]);
    setSort("title");
    setSortDir("asc");
  };

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
    const handleClickOutside = (event) => {
      if (
        isAnyFilterOpen &&
        !event.target.closest(".filter .filter-dropdown")
      ) {
        setShowFilter(false);
        setShowRating(false);
        setShowPrice(false);
        setShowSort(false);
        setIsAnyFilterOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isAnyFilterOpen]);

  return (
    <div className="filter">
      <div className="filter-container">
        <div className="filter-item">
          <MdCategory />
          <h2>Genre</h2>
          <button
            className={`filter-button ${showFilter ? "active" : ""}`}
            onClick={() => {
              setShowFilter(!showFilter);
              setIsAnyFilterOpen(!showFilter);
            }}
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
            onClick={() => {
              setShowRating(!showRating);
              setIsAnyFilterOpen(!showRating);
            }}
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
            onClick={() => {
              setShowPrice(!showPrice);
              setIsAnyFilterOpen(!showPrice);
            }}
          >
            <FaSortDown />
          </button>
          <div className={`filter-dropdown ${showPrice ? "show" : ""}`}>
            <div className="price-range-container">
              <label>
                <span>min: </span>
                <input
                  type="number"
                  min="0"
                  max="100"
                  step={10}
                  value={prices[0]}
                  onChange={(e) =>
                    setPrices((prev) => [
                      Number(Math.min(e.target.value, prices[1] - 1)),
                      prev[1],
                    ])
                  }
                  className="price-range"
                />
              </label>
              <label>
                <span>max: </span>
                <input
                  type="number"
                  min="0"
                  max="100"
                  step={10}
                  value={prices[1]}
                  onChange={(e) =>
                    setPrices((prev) => [
                      prev[0],
                      Number(Math.min(e.target.value, 100)),
                    ])
                  }
                  className="price-range"
                />
              </label>
            </div>
          </div>
        </div>
        <div className="filter-item grow">
          <FaSortAmountDown />
          <h2>Sort By</h2>
          <button
            className="filter-button"
            onClick={() => {
              setShowSort(!showSort);
              setIsAnyFilterOpen(!showSort);
            }}
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
      {(genres.length > 1 ||
        rating.length > 1 ||
        prices[0] !== 0 ||
        prices[1] !== 100 ||
        sort !== "title" ||
        sortDir !== "asc") && (
        <button className="clear-filters" onClick={handleClearFilters}>
          <TbTrashXFilled /> Clear Filters
        </button>
      )}
    </div>
  );
};

export default Filter;
