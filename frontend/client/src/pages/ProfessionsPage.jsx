import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import professions from "../data/professionsData";
import "./ProfessionsPage.css";
import EnrollModal from "../components/EnrollModal";

function ProfessionsPage() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const langProfessions = professions[i18n.language] || [];
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Helmet>
        <title>Enlight — {t("nav.professions")}</title>
        <meta name="description" content="Профессии будущего от Enlight: изучай востребованные специальности с нуля." />
        <meta property="og:title" content="Enlight — Профессии" />
        <meta property="og:description" content="Практические программы обучения для уверенного старта карьеры. Онлайн и офлайн." />
        <meta property="og:image" content="/og.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
      </Helmet>

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
    </>
  );
}

export default ProfessionsPage;
