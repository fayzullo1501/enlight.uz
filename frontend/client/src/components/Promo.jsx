import { useTranslation } from "react-i18next";
import "./Promo.css";

function Promo() {
  const { t } = useTranslation();

  return (
    <section className="promo">
      <div className="promo-card">
        <div className="promo-title">{t("promo.title")}</div>
        <div className="promo-link">{t("promo.more")} →</div>
        <div className="promo-desc">{t("promo.description")}</div>
      </div>
    </section>
  );
}

export default Promo;
