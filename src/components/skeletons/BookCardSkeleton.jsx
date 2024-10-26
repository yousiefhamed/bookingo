import "./BookCardSkeleton.css";

const BookCardSkeleton = () => {
  return (
    <div className="book-card">
      <div className="book-card-img">
        <div className="skeleton-img"></div>
      </div>
      <div className="book-card-info">
        <div className="skeleton-title"></div>
        <div className="skeleton-author"></div>
        <div className="skeleton-price"></div>
      </div>
    </div>
  );
};

export default BookCardSkeleton;
