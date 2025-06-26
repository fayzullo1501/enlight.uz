import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import "./Professions.css";

function Professions() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const professions = [
    {
      title: t("professions.accountant"),
      lang: t("professions.lang"),
      duration: t("professions.duration"),
      format: t("professions.format"),
      price: "499 000",
      monthly: "41 600",
    },
    {
      title: t("professions.designer"),
      lang: t("professions.lang"),
      duration: t("professions.duration"),
      format: t("professions.format"),
      price: "699 000",
      monthly: "58 300",
    },
    {
      title: t("professions.developer"),
      lang: t("professions.lang"),
      duration: t("professions.duration"),
      format: t("professions.format"),
      price: "599 000",
      monthly: "49 900",
    },
    {
      title: t("professions.marketer"),
      lang: t("professions.lang"),
      duration: t("professions.duration"),
      format: t("professions.format"),
      price: "499 000",
      monthly: "41 600",
    },
    {
      title: t("professions.hr"),
      lang: t("professions.lang"),
      duration: t("professions.duration"),
      format: t("professions.format"),
      price: "799 000",
      monthly: "66 600",
    },
    {
      title: t("professions.pm"),
      lang: t("professions.lang"),
      duration: t("professions.duration"),
      format: t("professions.format"),
      price: "599 000",
      monthly: "49 900",
    },
  ];

  return (
    <section className="professions">
      <div className="professions-header">
        <h2>{t("nav.professions")}</h2>
        <span
          className="view-all"
          onClick={() => navigate(`/${i18n.language}/professions`)}
        >
          {t("professions.viewAll")} →
        </span>
      </div>

      <div className="professions-grid">
        {professions.map((item, index) => (
          <div className="profession-card" key={index}>
            <h3>
              {item.title}
              <span className="dot">.</span>
            </h3>
            <p>
              <strong>{t("professions.language")}:</strong> {item.lang}
            </p>
            <p>
              <strong>{t("professions.durationTitle")}:</strong> {item.duration}
            </p>
            <p>
              <strong>{t("professions.formatTitle")}:</strong> {item.format}
            </p>
            <div className="bottom">
              <div className="price">
                <div className="main-price">{item.price} сум</div>
                <strong className="installment">{item.monthly} сум/мес.</strong>
              </div>
              <div className="buttons">
                <button className="btn-outline">{t("professions.more")}</button>
                <button className="btn-enroll">{t("professions.enroll")}</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Professions;
