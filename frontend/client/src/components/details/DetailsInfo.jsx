import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import courses from "../../data/coursesData";
import professions from "../../data/professionsData";
import "./DetailsInfo.css";

function DetailsInfo() {
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

  if (!item) return <p>{t("notFound")}</p>;

  const title = item.title?.[lang] || "";
  const short = item.shortDescription?.[lang] || "";
  const description = item.description?.[lang] || "";
  const courseLang = item.lang?.[lang] || "";
  const duration = item.duration?.[lang] || "";
  const format = item.format?.[lang] || "";
  const price = item.price || "";
  const currency = t(`${type}.currency`, "сум");

  return (
    <section className="details-section">
      <div className="details-grid">
        <div className="details-image">
          <span>{title}</span>
        </div>

        <div className="details-content">
          <div className="details-text">
            <h1>{title}</h1>
            {short && <p className="details-short">{short}</p>}
          </div>

          <div className="details-bottom-row">
            <div className="details-meta">
              <p><strong>{t(`${type}.language`, "Язык")}:</strong> {courseLang}</p>
              <p><strong>{t(`${type}.duration`, "Продолжительность")}:</strong> {duration}</p>
              <p><strong>{t(`${type}.format`, "Формат")}:</strong> {format}</p>
            </div>
            <div className="details-price">
              <p>{price} {currency}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DetailsInfo;
