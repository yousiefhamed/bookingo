import { Link } from "react-router-dom";
import "./../styles/book.css";
import Rating from "./utils/Rating";

const Book = ({ book }) => {
  return (
    <Link to={`/book/${book.id}`} className="book">
      <img
        src={
          book.coverImage ||
          "https://via.placeholder.com/200x300?text=No+Cover+Image"
        }
        alt={book.title}
      />
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <div className="book-rating">
        <Rating overallRating={book.rating} />
      </div>
      <p>
        <strong>Price:</strong> ${book.price}
      </p>
    </Link>
  );
};

export default Book;
