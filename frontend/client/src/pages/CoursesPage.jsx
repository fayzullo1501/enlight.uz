import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import courses from "../data/coursesData";
import "./CoursesPage.css";
import EnrollModal from "../components/EnrollModal";

function CoursesPage() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const langCourses = courses[i18n.language] || [];
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Helmet>
        <title>Enlight — {t("nav.courses")}</title>
        <meta name="description" content="Онлайн и офлайн курсы от Enlight: IT, языки, дизайн и другое." />
        <meta property="og:title" content="Enlight — Курсы" />
        <meta property="og:description" content="Изучи востребованные профессии вместе с Enlight. Удобные форматы и доступные цены." />
        <meta property="og:image" content="/og.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
      </Helmet>

      <section className="courses-page">
        <div className="courses-grid">
          {langCourses.map((course) => (
            <div className="course-card" key={course.id}>
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
                  <div className="main-price">
                    {course.price} {t("courses.currency")}
                  </div>
                  <strong className="installment">
                    {course.monthly} {t("courses.monthlySuffix")}
                  </strong>
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
    </>
  );
}

export default CoursesPage;
