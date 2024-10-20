// import { useSearchParams } from "react-router-dom";

import Headeing from "./../components/utils/Headeing";
import Book from "../components/BookCard";
import Filter from "../components/Filter";

import { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";

const AllBooks = () => {
  // const [searchParams] = useSearchParams();
  // const searchQuery = searchParams.get("q");
  // const genres = searchParams.get("genres")?.split(",");
  // const rating = searchParams.get("rating")?.split(",");
  // const price = searchParams.get("price")?.split(",");
  // const sort = searchParams.get("sort");
  // const sortDir = searchParams.get("sortDir");

  const [filteredBooks, setFilteredBooks] = useState([]);

  const { books } = useAppContext();

  // const filterBooks = () => {
  //   setFilteredBooks(
  //     apiBooks.filter((book) => {
  //       const titleMatch = book.title
  //         .toLowerCase()
  //         .includes(searchQuery?.toLowerCase() || "");

  //       const genreMatch = genres?.includes(book.genre) || true;
  //       const ratingMatch = rating?.includes(book.rating) || true;
  //       const priceMatch =
  //         price?.length === 2
  //           ? book.price > Math.min(Number(price[0]), Number(price[1])) &&
  //             book.price < Math.max(Number(price[0]), Number(price[1]))
  //           : true;
  //       return titleMatch && genreMatch && ratingMatch && priceMatch;
  //     })
  //   );
  // };

  useEffect(() => {
    setFilteredBooks(books);
  }, [books]);

  return (
    <section className="popular-books">
      <Headeing text="All Books" />
      <Filter />
      <div className="books">
        {filteredBooks.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </div>
    </section>
  );
};

export default AllBooks;
