import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import "./Courses.css";

function Courses() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const courses = [
    {
      title: t("courses.general"),
      lang: t("courses.lang"),
      duration: t("courses.duration3"),
      format: t("courses.online"),
      price: "499 000",
      monthly: "41 600",
    },
    {
      title: t("courses.it"),
      lang: t("courses.lang"),
      duration: t("courses.duration3"),
      format: t("courses.online"),
      price: "699 000",
      monthly: "58 300",
    },
    {
      title: t("courses.ielts"),
      lang: t("courses.lang"),
      duration: t("courses.duration4"),
      format: t("courses.online"),
      price: "599 000",
      monthly: "49 900",
    },
    {
      title: t("courses.japanese"),
      lang: t("courses.lang"),
      duration: t("courses.duration3"),
      format: t("courses.online"),
      price: "499 000",
      monthly: "41 600",
    },
    {
      title: t("courses.individual"),
      lang: t("courses.lang"),
      duration: t("courses.duration3"),
      format: t("courses.online"),
      price: "799 000",
      monthly: "66 600",
    },
    {
      title: t("courses.chinese"),
      lang: t("courses.lang"),
      duration: t("courses.duration3"),
      format: t("courses.online"),
      price: "599 000",
      monthly: "49 900",
    },
  ];

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
        {courses.map((course, index) => (
          <div className="course-card" key={index}>
            <h3>
              {course.title}
              <span className="dot">.</span>
            </h3>
            <p>
              <strong>{t("courses.language")}:</strong> {course.lang}
            </p>
            <p>
              <strong>{t("courses.duration")}:</strong> {course.duration}
            </p>
            <p>
              <strong>{t("courses.format")}:</strong> {course.format}
            </p>
            <div className="bottom">
              <div className="price">
                <div className="main-price">{course.price} сум</div>
                <strong className="installment">{course.monthly} сум/мес.</strong>
              </div>
              <div className="buttons">
                <button
                  className="btn-outline"
                  onClick={() => navigate(`/${i18n.language}/courses/details`)}
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

export default Courses;
