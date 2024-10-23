import Rating from "./../components/utils/Rating";
import AddToCartBtn from "./utils/AddToCartBtn";
import AddToWishlist from "./utils/AddToWishlist";

import "./../styles/book-data.css";
import RecommendedBooks from "./RecommendedBooks";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { useWishlistContext } from "../context/WishlistContext";

const BookData = ({ book }) => {
  const {
    _id,
    coverImage,
    title,
    author,
    description,
    price,
    rating,
    genre,
    stock,
  } = book;

  const { books } = useAppContext();
  const { wishlist } = useWishlistContext();

  return (
    <>
      <div className="book-data-container">
        <div className="book-cover">
          <img src={coverImage} alt={`${title} cover`} />
          {stock === 0 ? <p>Out of Stock</p> : ""}
        </div>
        <div className="book-details">
          <h1>{title}</h1>
          <p className="author">
            <Link to={`/author/${author}`}>{author}</Link>
          </p>
          <p className="genre gray">{genre}</p>
          <p className="bottom">
            <Rating overallRating={rating} />
          </p>
          <p className="price">${price}</p>
          <p className="gray bottom">{description}</p>
          <div className="book-details-actions">
            <AddToCartBtn id={_id} disabled={!stock} />
            <AddToWishlist
              id={book._id}
              isActive={wishlist.includes(book._id)}
            />
          </div>
        </div>
      </div>
      <RecommendedBooks books={books} />
    </>
  );
};

export default BookData;
