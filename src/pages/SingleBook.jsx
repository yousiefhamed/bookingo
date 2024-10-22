import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import BookData from "../components/BookData";
import { getBook } from "../hooks/useApi";

const SingleBook = () => {
  const params = useParams();
  const bookId = params.id;

  const [book, setBook] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await getBook(bookId);
        setBook(response);
      } catch (error) {
        setError("something went wrong");
      }
    };
    fetchBook();
  }, [bookId]);

  return <>{error ? <p>{`Error: ${error}`}</p> : <BookData book={book} />}</>;
};

export default SingleBook;
