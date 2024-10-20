// import { useParams } from "react-router-dom";

import BookData from "../components/BookData";

import test from "./../assets/books/test.png";

const SingleBook = () => {
  // const params = useParams();
  // const bookId = params.id;

  const book = {
    id: "1",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    description:
      "A novel about the American Dream and the excesses of the 1920s.",
    coverImage: test,
    price: 12.99,
    rating: 4.5,
    genre: "Fiction",
    availability: true,
    reviews: [
      {
        id: "1",
        user: "John Doe",
        rating: 4,
        comment: "A classic that never gets old.",
      },
      {
        id: "2",
        user: "Jane Smith",
        rating: 5,
        comment: "A must-read for anyone interested in the 1",
      },
    ],
  };

  return (
    <>
      <BookData book={book} />
    </>
  );
};

export default SingleBook;
