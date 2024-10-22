import Headeing from "./../components/utils/Headeing";
import Book from "../components/BookCard";
import Filter from "../components/Filter";

import { useFilterContext } from "../context/FilterContext";

const AllBooks = () => {
  const { filteredBooks, errorBooks } = useFilterContext();

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
