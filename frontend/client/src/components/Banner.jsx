import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import "./Banner.css";

function Banner() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <section className="banner">
      <div className="banner-grid">
        {/* Левая большая колонка */}
        <div className="block black">
          <p className="sub">{t("banner.moreOffers")}</p>
          <h2>{t("banner.mainTitle")}</h2>
          <button className="btn" onClick={() => navigate(`/${t("lang")}/courses`)}>
            {t("banner.button")}
          </button>
        </div>

        {/* Правая сторона */}
        <div className="column-right">
          <div
            className="block gray clickable"
            onClick={() => navigate(`/${t("lang")}/blognews`)}
          >
            <p className="sub">{t("banner.blogSub")}</p>
            <h3>{t("banner.blogTitle")}</h3>
            <span className="arrow">↗</span>
          </div>

          <div className="row-bottom">
            <div
              className="block purple clickable"
              onClick={() => navigate(`/${t("lang")}/about`)}
            >
              <p className="sub">{t("banner.aboutSub")}</p>
              <h3>{t("banner.aboutTitle")}</h3>
              <span className="arrow">↗</span>
            </div>
            <div
              className="block green clickable"
              onClick={() => navigate(`/${t("lang")}/contact`)}
            >
              <p className="sub">{t("banner.contactSub")}</p>
              <h3>{t("banner.contactTitle")}</h3>
              <span className="arrow">✈</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
