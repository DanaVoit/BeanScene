import React, { useState } from "react";
import comment from "../data/comment.json";
import { SectionHeader } from "./SectionHeader";

function CommentList() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === comment.length - 1 ? 0 : prevSlide + 1
    );
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? comment.length - 1 : prevSlide - 1
    );
  };

  const commentListItems = comment.map((data, index) => (
    <li
      key={index}
      className={`feedback-item ${index === currentSlide ? "active" : ""}`}
    >
      <p className="feedback-item-symbol">“</p>
      <div className="feedback-item-inner">
        <p className="feedback-item-comment">{data.comment}</p>
        <p className="feedback-item-name">{data.name}</p>
        <p className="main-txt">{data.job}</p>
        <div className="feedback-item-photo"></div>
      </div>
    </li>
  ));

  return (
    <div className="comment-slider">
      <button onClick={handlePrevSlide} className="slider-button slider-button--prev">
        Prev
      </button>
      <ul className="comment">{commentListItems[currentSlide]}</ul>
      <button onClick={handleNextSlide} className="slider-button slider-button--next">
        Next
      </button>
    </div>
  );
}

function Feedback() {
  return (
    <section className="container section">
      <SectionHeader
        title="Our coffee perfection feedback"
        dscrpt="Our customers have amazing things to say about us"
      />
      <CommentList />
    </section>
  );
}

export { Feedback };