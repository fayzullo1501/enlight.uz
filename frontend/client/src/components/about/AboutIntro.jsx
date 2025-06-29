import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import "./AboutIntro.css";

function AboutIntro() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  return (
    <section className="about-intro-section">
      <div className="about-intro-left">
        <h2>{t("aboutIntro.title")}</h2>

        <div className="about-intro-text-button-group">
          <div className="about-intro-button-text">
            <strong>{t("aboutIntro.cta")}</strong>
            <span>{t("aboutIntro.link").toUpperCase()}</span>
          </div>
          <button
            className="about-intro-button"
            onClick={() => navigate(`/${i18n.language}/courses`)}
          >
            ↗
          </button>
        </div>
      </div>

      <div className="about-intro-right">
        <h3>{t("aboutIntro.missionTitle")}</h3>
        <p>{t("aboutIntro.missionDesc")}</p>
        <ul>
          <li>{t("aboutIntro.linkEdu")}: <a href="https://edu.enlight.uz">edu.enlight.uz</a></li>
          <li>{t("aboutIntro.linkLms")}: <a href="https://lms.enlight.uz">lms.enlight.uz</a></li>
          <li>{t("aboutIntro.linkUni")}: <a href="https://uni.enlight.uz">uni.enlight.uz</a></li>
          <li>{t("aboutIntro.linkClub")}: <a href="https://club.enlight.uz">club.enlight.uz</a></li>
        </ul>
        <p>{t("aboutIntro.teamDesc")}</p>
      </div>
    </section>
  );
}

export default AboutIntro;
