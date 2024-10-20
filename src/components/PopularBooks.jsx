import Headeing from "./utils/Headeing";
import Book from "./BookCard";

import test from "./../assets/books/test.png";

const PopularBooks = () => {
  const books = [
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      image: test,
    },
    {
      id: 2,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      image: test,
    },
    {
      id: 3,
      title: "1984",
      author: "George Orwell",
      image: test,
    },
    {
      id: 4,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      image: test,
    },
    {
      id: 5,
      title: "The Catcher in the Rye kafja kfjafk lajfak",
      author: "J.D. Salinger",
      image: test,
    },
  ];

  return (
    <section className="popular-books">
      <Headeing text="Popular Books" />
      <div className="books">
        {books.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </div>
    </section>
  );
};

export default PopularBooks;
