import Headeing from "./utils/Headeing";
import Book from "./BookCard";

import { useAppContext } from "../context/AppContext";
import { useEffect, useState } from "react";
import BookCardSkeleton from "./../components/skeletons/BookCardSkeleton";
import { useErrorContext } from "../context/ErrorContext";

const PopularBooks = () => {
  const { books, loadingBooks, errorBooks } = useAppContext();
  const { setMessages } = useErrorContext();

  const [filteredBooks, setFilteredBooks] = useState([]);

  const [renderedElements, setRenderedElements] = useState(
    <BookCardSkeleton />
  );

  useEffect(() => {
    if (books && !loadingBooks && !errorBooks) {
      const sortedBooks = books.sort((a, b) => b.rating - a.rating);
      setFilteredBooks(sortedBooks.slice(0, 10));
    }
  }, [books, errorBooks, loadingBooks]);

  useEffect(() => {
    setRenderedElements(() => {
      if (loadingBooks)
        return Array.from({ length: 10 }, (_, i) => (
          <BookCardSkeleton key={i} />
        ));
      if (errorBooks) return <p>{errorBooks}</p>;
      if (filteredBooks.length === 0) return <p>No books found</p>;
      return filteredBooks.map((book) => <Book key={book._id} book={book} />);
    });
  }, [books, errorBooks, filteredBooks, loadingBooks]);

  useEffect(() => {
    if (errorBooks) {
      setMessages((prev) => [
        ...prev,
        { type: "danger", message: errorBooks, time: Date.now() },
      ]);
    }
  }, [errorBooks, setMessages]);

  return (
    <section className="popular-books">
      <Headeing text="Popular Books" />
      <div className="books">{renderedElements}</div>
    </section>
  );
};

export default PopularBooks;
