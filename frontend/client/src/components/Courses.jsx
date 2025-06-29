import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import courses from "../data/coursesData";
import "./Courses.css";
import EnrollModal from "../components/EnrollModal";

function Courses() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
  const [showModal, setShowModal] = useState(false);


  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const langCourses = courses[i18n.language] || [];
  const visibleCourses = isMobile ? langCourses.slice(0, 3) : langCourses.slice(0, 6);

  return (
    <section className="courses">
      <div className="courses-header">
        <h2>{t("nav.courses")}</h2>
        <span
          className="view-all"
          onClick={() => navigate(`/${i18n.language}/courses`)}
        >
          {t("courses.viewAll")} →
        </span>
      </div>

      <div className="courses-grid">
        {visibleCourses.map((course, index) => (
          <div className="course-card" key={index}>
            <h3>
              {course.title[i18n.language]}
              <span className="dot">.</span>
            </h3>
            <p>
              <strong>{t("courses.language")}:</strong> {course.lang[i18n.language]}
            </p>
            <p>
              <strong>{t("courses.duration")}:</strong> {course.duration[i18n.language]}
            </p>
            <p>
              <strong>{t("courses.format")}:</strong> {course.format[i18n.language]}
            </p>
            <div className="bottom">
              <div className="price">
                <div className="main-price">{course.price} {t("courses.currency")}</div>
                <strong className="installment">{course.monthly} {t("courses.monthlySuffix")}</strong>
              </div>
              <div className="buttons">
                <button
                  className="btn-outline"
                  onClick={() => navigate(`/${i18n.language}/courses/${course.id}`)}
                >
                  {t("courses.more")}
                </button>
                <button className="btn-enroll" onClick={() => setShowModal(true)}>
                  {t("courses.enroll")}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <EnrollModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </section>
  );
}

export default Courses;
