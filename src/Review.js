import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];
  const prevCard = () => {
    if (index === 0) {
      setIndex(people.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  const nextCard = () => {
    if (people.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const randomCard = () => {
    const randomValue = Math.floor(Math.random() * (4 - 1) + 1);
    console.log(randomValue);
    setIndex(randomValue);
  };
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaChevronRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevCard}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextCard}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomCard}>
        Surprise me
      </button>
    </article>
  );
};

export default Review;
