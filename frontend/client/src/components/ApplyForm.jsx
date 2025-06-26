import { useTranslation } from "react-i18next";
import "./ApplyForm.css";

function ApplyForm() {
  const { t } = useTranslation();

  return (
    <section className="apply">
      <div className="apply-card">
        <div className="apply-left">
          <h2>{t("form.title")}</h2>
        </div>

        <form className="apply-right">
          <input
            type="text"
            placeholder={t("form.name")}
            required
            className="input-full"
          />

          <div className="apply-row">
            <input
              type="tel"
              placeholder="+998"
              required
            />
            <input
              type="email"
              placeholder={t("form.email")}
              required
            />
          </div>

          <div className="button-row">
            <button type="submit">{t("form.button")}</button>
          </div>

          <label className="policy">
            <input type="checkbox" required />
            <span>
              {t("form.policyText")}{" "}
              <a href="#" className="policy-link">
                {t("form.policyLink")}
              </a>
            </span>
          </label>
        </form>
      </div>
    </section>
  );
}

export default ApplyForm;
