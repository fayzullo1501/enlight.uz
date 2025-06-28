import React, { useState, useContext } from "react";
import "./Review.css";
import { ThemeContext } from "../context/ThemeContext";
import { useTranslation } from "react-i18next";

import avatar1 from "../assets/banner-1.png";
import avatar2 from "../assets/banner-1.png";
import avatar3 from "../assets/banner-1.png";
import avatar4 from "../assets/banner-1.png";

const Review = () => {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCards = window.innerWidth <= 768 ? 1 : 1.5;
  const maxIndex = 4 - visibleCards;

  const reviews = [
    {
      name: t("reviews.0.name"),
      course: t("reviews.0.course"),
      stars: 5,
      text: t("reviews.0.text"),
      img: avatar1,
    },
    {
      name: t("reviews.1.name"),
      course: t("reviews.1.course"),
      stars: 5,
      text: t("reviews.1.text"),
      img: avatar2,
    },
    {
      name: t("reviews.2.name"),
      course: t("reviews.2.course"),
      stars: 5,
      text: t("reviews.2.text"),
      img: avatar3,
    },
    {
      name: t("reviews.3.name"),
      course: t("reviews.3.course"),
      stars: 5,
      text: t("reviews.3.text"),
      img: avatar4,
    },
  ];

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const handleNext = () => {
    if (currentIndex < maxIndex) setCurrentIndex(currentIndex + 1);
  };

  const handleWheel = (e) => {
    if (e.deltaY > 0) handleNext();
    else if (e.deltaY < 0) handlePrev();
  };

  return (
    <section className={`review-section ${theme}`} onWheel={handleWheel}>
      <div className="review-container">
        <h2 className="review-title">{t("reviews.title")}</h2>
        <div className="review-slider-wrapper">
          <div
            className="review-slider"
            style={{ transform: `translateX(-${currentIndex * (100 / visibleCards)}%)` }}
          >
            {reviews.map((item, i) => (
              <div className="review-card" key={i}>
                <div className={`review-content ${theme}`}>
                  <div className="review-header">
                    <img src={item.img} alt={item.name} className="review-avatar" />
                    <div>
                      <div className="review-name">{item.name}</div>
                      <div className="review-course">
                        {t("reviews.coursePrefix")} «{item.course}»
                      </div>
                    </div>
                  </div>
                  <div className="review-stars">{"★".repeat(item.stars)}</div>
                  <div className="review-text">{item.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="review-buttons">
          <button className="review-btn" onClick={handlePrev} disabled={currentIndex === 0}>
            <svg fill="none" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="review-btn" onClick={handleNext} disabled={currentIndex >= maxIndex}>
            <svg fill="none" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Review;
