import Rating from "./../components/utils/Rating";
import AddToCartBtn from "./utils/AddToCartBtn";
import AddToWishlist from "./utils/AddToWishlist";

import "./../styles/book-data.css";
import RecommendedBooks from "./RecommendedBooks";
import { Link } from "react-router-dom";

const BookData = ({ book }) => {
  const {
    title,
    author,
    description,
    coverImage,
    price,
    rating,
    genre,
    availability,
    reviews,
  } = book;

  return (
    <>
      <div className="book-data-container">
        <div className="book-cover">
          <img src={coverImage} alt={`${title} cover`} />
          {availability === false ? <p>Out of Stock</p> : ""}
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
            <AddToCartBtn handleClick={() => {}} disabled={!availability} />
            <AddToWishlist handleClick={() => {}} />
          </div>
        </div>
      </div>
      <RecommendedBooks />
      {reviews.length > 0 && (
        <div className="book-details-reviews">
          <h2>Reviews</h2>
          <div className="book-details-reviews-list">
            {reviews.map((review) => (
              <div className="book-details-reviews-list-item" key={review.id}>
                <div className="book-details-reviews-list-item-user">
                  <p>{review.user}</p>
                  <Rating overallRating={review.rating} />
                </div>
                <p className="gray">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default BookData;
