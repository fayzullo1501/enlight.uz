import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import courses from "../data/coursesData";
import professions from "../data/professionsData";
import "./DetailsPage.css";

function DetailsPage() {
  const { t, i18n } = useTranslation();
  const { type, id } = useParams();
  const lang = i18n.language;

  const getData = () => {
    if (type === "courses") return courses[lang];
    if (type === "professions") return professions[lang];
    return [];
  };

  const dataList = getData();
  const item = dataList.find((el) => String(el.id) === id);

  if (!item) return <p>{t("notFound")}</p>; // или просто "Not found"

  return (
    <section className="details">
      <h2>{item.title[lang]}</h2>
      <p><strong>{t(`${type}.language`)}:</strong> {item.lang[lang]}</p>
      <p><strong>{t(`${type}.durationTitle`)}:</strong> {item.duration[lang]}</p>
      <p><strong>{t(`${type}.formatTitle`)}:</strong> {item.format[lang]}</p>
      <p><strong>{t(`${type}.price`)}:</strong> {item.price} {t(`${type}.currency`)}</p>
      <p><strong>{t(`${type}.monthly`)}:</strong> {item.monthly} {t(`${type}.monthlySuffix`)}</p>
    </section>
  );
}

export default DetailsPage;
