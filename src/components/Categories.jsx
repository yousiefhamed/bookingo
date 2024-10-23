import "./../styles/categories.css";

import Headeing from "./utils/Headeing";
import { Link } from "react-router-dom";

const Categories = () => {
  const categories = [
    "Self-help",
    "Personal Finance",
    "Business",
    "History",
    "Memoir",
    "Leadership",
    "Spirituality",
    "Psychology",
    "Productivity",
    "Fiction",
    "Military Strategy",
    "Creativity",
    "Science Fiction",
    "Classic",
    "Dystopian",
    "Post-apocalyptic",
    "Non-fiction",
    "True Crime",
    "Negotiation",
    "Biography",
  ];

  return (
    <section className="categories">
      <Headeing text="Explore Genres" />
      <div className="categories-container">
        {categories.map((category) => (
          <Link
            to={`/books?category=${category}`}
            className="category-card"
            key={category}
          >
            <img
              src="https://png.pngtree.com/png-vector/20230318/ourmid/pngtree-reading-books-icon-vector-png-image_6653519.png"
              alt={category}
            />
            <h3>{category}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories;
