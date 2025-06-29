import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import courses from "../../data/coursesData";
import professions from "../../data/professionsData";
import "./CourseDetails.css";

function CourseDetails() {
  const { i18n } = useTranslation();
  const { type, id } = useParams();
  const lang = i18n.language;

  const getData = () => {
    if (type === "courses") return courses[lang];
    if (type === "professions") return professions[lang];
    return [];
  };

  const dataList = getData();
  const item = dataList.find((el) => String(el.id) === id);
  const description = item?.description?.[lang];
  const title = item?.courseTitle?.[lang];

  if (!description || !title) return null;

  return (
    <section className="course-details">
      <div className="course-details-card">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </section>
  );
}

export default CourseDetails;
