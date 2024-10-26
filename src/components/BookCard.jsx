import { Link } from "react-router-dom";
import "./../styles/book.css";
import Rating from "./utils/Rating";
import AddToWishlist from "./utils/AddToWishlist";
import AddToCartBtn from "./utils/AddToCartBtn";
import { useWishlistContext } from "../context/WishlistContext";

const Book = ({ book }) => {
  const { wishlist } = useWishlistContext();

  return (
    <Link to={`/book/${book._id}`} className="book">
      {book.stock === 0 && <p className="book-stock">Out of Stock</p>}
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
        <AddToCartBtn id={book._id} disabled={!book.stock} />
        <AddToWishlist id={book._id} isActive={wishlist.includes(book._id)} />
      </div>
    </Link>
  );
};

export default Book;
