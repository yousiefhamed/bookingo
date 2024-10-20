import { Link } from "react-router-dom";
import "./../styles/book.css";

const Book = ({ book }) => {
  return (
    <Link to={`/book/${book.id}`} className="book">
      <img src={book.coverImage} alt={book.title} />
      <h3>{book.title}</h3>
      <p>{book.author}</p>
    </Link>
  );
};

export default Book;
