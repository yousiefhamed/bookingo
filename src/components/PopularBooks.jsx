import Headeing from "./utils/Headeing";
import Book from "./BookCard";

import { useAppContext } from "../context/AppContext";
import { useEffect, useState } from "react";

const PopularBooks = () => {
  const { books } = useAppContext();
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(
    () =>
      setFilteredBooks(books.sort((a, b) => b.rating - a.rating).slice(0, 5)),
    [books]
  );

  return (
    <section className="popular-books">
      <Headeing text="Popular Books" />
      <div className="books">
        {filteredBooks.length === 0
          ? ""
          : filteredBooks.map((book) => <Book key={book._id} book={book} />)}
      </div>
    </section>
  );
};

export default PopularBooks;
