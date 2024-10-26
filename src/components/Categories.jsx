import Headeing from "./utils/Headeing";
import { Link } from "react-router-dom";

import "./../styles/categories.css";

import selfHelp from "./../assets/categories/Self-help.png";
import personalFinance from "./../assets/categories/Personal-Finance.png";
import business from "./../assets/categories/business.png";
import history from "./../assets/categories/history.png";
import memoir from "./../assets/categories/memoir.webp";
import leadership from "./../assets/categories/leadership.png";
import spirituality from "./../assets/categories/spirituality.png";
import psychology from "./../assets/categories/psychology.png";
import productivity from "./../assets/categories/productivity.png";
import fiction from "./../assets/categories/fiction.png";
import militaryStrategy from "./../assets/categories/military-strategy.png";
import creativity from "./../assets/categories/creativity.png";
import scienceFiction from "./../assets/categories/science-fiction.png";
import classic from "./../assets/categories/classic.png";
import dystopian from "./../assets/categories/dystopian.png";
import postApocalyptic from "./../assets/categories/post-apocalyptic.png";
import nonFiction from "./../assets/categories/non-fiction.png";
import trueCrime from "./../assets/categories/true-crime.png";
import negotiation from "./../assets/categories/negotiation.png";
import biography from "./../assets/categories/biography.png";

const Categories = () => {
  const categories = [
    { title: "Self-help", img: selfHelp },
    { title: "Personal Finance", img: personalFinance },
    { title: "Business", img: business },
    { title: "History", img: history },
    { title: "Memoir", img: memoir },
    { title: "Leadership", img: leadership },
    { title: "Spirituality", img: spirituality },
    { title: "Psychology", img: psychology },
    { title: "Productivity", img: productivity },
    { title: "Fiction", img: fiction },
    { title: "Military Strategy", img: militaryStrategy },
    { title: "Creativity", img: creativity },
    { title: "Science Fiction", img: scienceFiction },
    { title: "Classic", img: classic },
    { title: "Dystopian", img: dystopian },
    { title: "Post-apocalyptic", img: postApocalyptic },
    { title: "Non-fiction", img: nonFiction },
    { title: "True Crime", img: trueCrime },
    { title: "Negotiation", img: negotiation },
    { title: "Biography", img: biography },
  ];

  return (
    <section className="categories">
      <Headeing text="Explore Genres" />
      <div className="categories-container">
        {categories.map(({ title, img }) => (
          <Link
            to={`/books?category=${title}`}
            className="category-card"
            key={title}
          >
            <img src={img} alt={title} />
            <h3>{title}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories;
