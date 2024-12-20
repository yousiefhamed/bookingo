import Headeing from "./../components/utils/Headeing";
import Book from "../components/BookCard";
import Filter from "../components/Filter";

import { useFilterContext } from "../context/FilterContext";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { useErrorContext } from "../context/ErrorContext";

const AllBooks = () => {
  const { setMessages } = useErrorContext();

  const [URLSearchParams] = useSearchParams();
  const category = URLSearchParams.get("category");

  const { filteredBooks, errorBooks, setGenres } = useFilterContext();

  useEffect(() => {
    if (category) setGenres((prev) => [...prev, category]);
  }, [category, setGenres]);

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
      <Headeing text="All Books" />
      <Filter />
      <div className="books">
        {errorBooks ? (
          <p>{`${errorBooks}`}</p>
        ) : (
          filteredBooks.map((book) => <Book key={book._id} book={book} />)
        )}
      </div>
    </section>
  );
};
export default AllBooks;
