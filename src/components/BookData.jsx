import Rating from "./../components/utils/Rating";
import AddToCartBtn from "./utils/AddToCartBtn";
import AddToWishlist from "./utils/AddToWishlist";

import "./../styles/book-data.css";
import RecommendedBooks from "./RecommendedBooks";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

const BookData = ({ book }) => {
  const {
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
            <AddToCartBtn handleClick={() => {}} disabled={!stock} />
            <AddToWishlist handleClick={() => {}} />
          </div>
        </div>
      </div>
      <RecommendedBooks books={books} />
    </>
  );
};

export default BookData;
