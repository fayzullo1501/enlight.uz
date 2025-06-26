import { useTranslation } from "react-i18next";
import "./About.css";

function About() {
  const { t } = useTranslation();

  return (
    <section className="about">
      <div className="about-card">
        <p className="about-text">
          {t("about.description")}
        </p>
        <div className="about-numbers">
          <div className="about-item">
            <div className="number">3</div>
            <div className="label">{t("about.years")}</div>
          </div>
          <div className="about-item">
            <div className="number">80+</div>
            <div className="label">{t("about.projects")}</div>
          </div>
          <div className="about-item">
            <div className="number">400+</div>
            <div className="label">{t("about.staff")}</div>
          </div>
          <div className="about-item">
            <div className="number">$350000+</div>
            <div className="label">{t("about.saved")}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
