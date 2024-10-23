import { createContext, useContext, useEffect, useState } from "react";
import { useAppContext } from "./AppContext";

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [genres, setGenres] = useState(["all"]);
  const [rating, setRating] = useState(["all"]);
  const [prices, setPrices] = useState([0, 100]);
  const [sort, setSort] = useState("title");
  const [sortDir, setSortDir] = useState("asc");

  const { books, errorBooks } = useAppContext();

  const [filteredBooks, setFilteredBooks] = useState(books);

  useEffect(() => {
    setFilteredBooks(books);
  }, [books]);

  useEffect(() => {
    const filteredBooks = books?.filter((book) => {
      const genreMatch =
        genres?.length > 1
          ? (genres?.length > 1 && genres?.includes(book.genre)) || false
          : true;
      const ratingMatch =
        rating?.length > 1 ? rating?.includes(Math.floor(book.rating)) : true;
      const priceMatch =
        Math.min(Number(prices[0]), Number(prices[1])) !== 0 ||
        Math.max(Number(prices[0]), Number(prices[1])) !== 100
          ? book.price > Math.min(Number(prices[0]), Number(prices[1])) &&
            book.price < Math.max(Number(prices[0]), Number(prices[1]))
          : true;
      const titleMatch = book.title
        .toLowerCase()
        .includes(search?.toLowerCase() || "");

      return genreMatch && ratingMatch && priceMatch && titleMatch;
    });

    setFilteredBooks(() => {
      if (books && sortDir === "asc") {
        if (sort === "title") {
          return filteredBooks.sort((a, b) =>
            a.title.localeCompare(b.title, undefined, {
              sensitivity: "base",
            })
          );
        } else if (sort === "price") {
          return filteredBooks.sort((a, b) => a.price - b.price);
        } else if (sort === "rating") {
          return filteredBooks.sort((a, b) => a.rating - b.rating);
        }
      } else if (sortDir === "desc") {
        if (sort === "title") {
          return filteredBooks.sort((a, b) =>
            b.title.localeCompare(a.title, undefined, {
              sensitivity: "base",
            })
          );
        } else if (sort === "price") {
          return filteredBooks.sort((a, b) => b.price - a.price);
        } else if (sort === "rating") {
          return filteredBooks.sort((a, b) => b.rating - a.rating);
        }
      }
    });
  }, [books, genres, prices, rating, search, setFilteredBooks, sort, sortDir]);

  return (
    <FilterContext.Provider
      value={{
        search,
        setSearch,
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
        filteredBooks,
        errorBooks,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
