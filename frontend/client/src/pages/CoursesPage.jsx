import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import courses from "../data/coursesData";
import "./CoursesPage.css";

function CoursesPage() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const langCourses = courses[i18n.language] || [];

  return (
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
                <button className="btn-enroll">{t("courses.enroll")}</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CoursesPage;
