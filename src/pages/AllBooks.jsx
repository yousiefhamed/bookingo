import Headeing from "./../components/utils/Headeing";
import Book from "../components/BookCard";
import Filter from "../components/Filter";

import { useFilterContext } from "../context/FilterContext";

const AllBooks = () => {
  const { filteredBooks } = useFilterContext();

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
