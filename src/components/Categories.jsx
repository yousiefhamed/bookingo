import "./../styles/categories.css";

import fiction from "./../assets/categories/fiction.png";
import history from "./../assets/categories/history.png";
import science from "./../assets/categories/science.png";
import biography from "./../assets/categories/biography.png";
import adventure from "./../assets/categories/adventure.png";
import business from "./../assets/categories/business.png";
import psychology from "./../assets/categories/psychology.png";
import healthcare from "./../assets/categories/healthcare.png";
import Headeing from "./utils/Headeing";
import { Link } from "react-router-dom";

const Categories = () => {
  const categories = [
    {
      title: "fiction",
      image: fiction,
    },
    {
      title: "history",
      image: history,
    },
    {
      title: "science",
      image: science,
    },
    {
      title: "biography",
      image: biography,
    },
    {
      title: "adventure",
      image: adventure,
    },
    {
      title: "business",
      image: business,
    },
    {
      title: "psychology",
      image: psychology,
    },
    {
      title: "healthcare",
      image: healthcare,
    },
  ];

  return (
    <section className="categories">
      <Headeing text="Explore Genres" />
      <div className="categories-container">
        {categories.map((category) => (
          <Link
            to={`/books?category=${category.title}`}
            className="category-card"
            key={category.title}
          >
            <img src={category.image} alt={category.title} />
            <h3>{category.title}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories;
