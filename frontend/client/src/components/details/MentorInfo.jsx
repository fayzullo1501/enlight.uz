import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import courses from "../../data/coursesData";
import professions from "../../data/professionsData";
import "./MentorInfo.css";

function MentorInfo() {
  const { t, i18n } = useTranslation();
  const { type, id } = useParams();
  const lang = i18n.language;

  const getData = () => {
    if (type === "courses") return courses[lang];
    if (type === "professions") return professions[lang];
    return [];
  }

  const dataList = getData();
  const item = dataList.find((el) => String(el.id) === id);
  const mentor = item?.mentor;

  if (!mentor) return null;

  return (
    <section className="mentor-section">
      <div className="mentor-card">
        <h2>{mentor.name?.[lang]}</h2>
        <p>{mentor.bio?.[lang]}</p>
      </div>
      <div className="mentor-photo">
        <img src={require(`../../assets/mentors/${mentor.photo}`)} alt="Mentor" />
      </div>
    </section>
  );
}

export default MentorInfo;
