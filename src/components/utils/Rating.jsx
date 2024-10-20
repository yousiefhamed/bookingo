import { Icon } from "@iconify-icon/react";

import "./../../styles/rating.css";

const Rating = ({ overallRating }) => {
  return (
    <div className="rating">
      {Array.from({ length: 5 }).map((_, index) =>
        overallRating - index > 0 && overallRating - index < 1 ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            key={index}
          >
            <defs>
              <linearGradient
                id={`starGradient-${index}`}
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop
                  offset={`${(overallRating - index) * 100}%`}
                  stopColor="#f97319"
                />
                <stop
                  offset={`${(overallRating - index) * 100}%`}
                  stopColor="#D3D3D3"
                />
              </linearGradient>
            </defs>
            <path
              fillRule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
              clipRule="evenodd"
              fill={`url(#starGradient-${index})`}
            />
          </svg>
        ) : index < overallRating ? (
          <Icon
            key={index}
            icon="fluent:star-24-filled"
            className="icon orange"
          />
        ) : (
          <Icon
            key={index}
            icon="fluent:star-24-filled"
            className="icon gray"
          />
        )
      )}
    </div>
  );
};

export default Rating;
