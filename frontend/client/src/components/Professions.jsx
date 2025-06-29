import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import professions from "../data/professionsData";
import "./Professions.css";
import EnrollModal from "../components/EnrollModal";

function Professions() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const langProfessions = professions[i18n.language] || [];
  const visibleProfessions = isMobile ? langProfessions.slice(0, 3) : langProfessions.slice(0, 6);

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
        {visibleProfessions.map((item) => (
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
                <button className="btn-enroll" onClick={() => setShowModal(true)}>
                  {t("professions.enroll")}
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

export default Professions;
