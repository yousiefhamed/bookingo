import { Link } from "react-router-dom";
import "./../styles/book.css";
import Rating from "./utils/Rating";
import AddToWishlist from "./utils/AddToWishlist";
import AddToCartBtn from "./utils/AddToCartBtn";

const Book = ({ book }) => {
  return (
    <Link to={`/book/${book._id}`} className="book">
      <img src={book.coverImage} alt={book.title} />
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <div className="book-rating">
        <Rating overallRating={book.rating} />
      </div>
      <p className="book-price">
        Price: <span>${book.price}</span>
      </p>
      <div className="book-actions">
        <AddToCartBtn handleClick={() => {}} disabled={!book.stock} />
        <AddToWishlist isActive={false} />
      </div>
    </Link>
  );
};

export default Book;
