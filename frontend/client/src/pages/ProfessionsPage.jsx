import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import professions from "../data/professionsData";
import "./ProfessionsPage.css";

function ProfessionsPage() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const langProfessions = professions[i18n.language] || [];

  return (
    <section className="professions-page">
      <div className="professions-grid">
        {langProfessions.map((item) => (
          <div className="profession-card" key={item.id}>
            <h3>
              {item.title[i18n.language]}
              <span className="dot">.</span>
            </h3>
            <p>
              <strong>{t("professions.language")}:</strong> {item.lang[i18n.language]}
            </p>
            <p>
              <strong>{t("professions.durationTitle")}:</strong> {item.duration[i18n.language]}
            </p>
            <p>
              <strong>{t("professions.formatTitle")}:</strong> {item.format[i18n.language]}
            </p>
            <div className="bottom">
              <div className="price">
                <div className="main-price">{item.price} {t("professions.currency")}</div>
                <strong className="installment">
                  {item.monthly} {t("professions.monthlySuffix")}
                </strong>
              </div>
              <div className="buttons">
                <button
                  className="btn-outline"
                  onClick={() => navigate(`/${i18n.language}/professions/${item.id}`)}
                >
                  {t("professions.more")}
                </button>
                <button className="btn-enroll">{t("professions.enroll")}</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProfessionsPage;
