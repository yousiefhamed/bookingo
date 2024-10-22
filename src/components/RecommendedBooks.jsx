import Headeing from "./utils/Headeing";
import Book from "./BookCard";

const RecommendedBooks = ({ books }) => {
  return (
    <section className="popular-books">
      <Headeing text="Suggested Books" />
      <div className="books">
        {books.map((book) => (
          <Book key={book._id} book={book} />
        ))}
      </div>
    </section>
  );
};

export default RecommendedBooks;
