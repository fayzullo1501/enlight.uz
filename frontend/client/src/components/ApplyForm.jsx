import { useTranslation } from "react-i18next";
import "./ApplyForm.css";
import { useState } from "react";

function ApplyForm() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    policy: false,
  });

  const BOT_TOKEN = "8123911745:AAGJFWRjS04KxGbJIeGX0idMjr8V_wOnE4c";
  const CHAT_ID = "446415034";
  const API_URL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.policy) {
      alert("Вы должны принять политику конфиденциальности.");
      return;
    }

    const message = `
📩 Новая заявка с сайта Enlight:
👤 Имя: ${formData.name}
📞 Телефон: ${formData.phone}
✉️ Email: ${formData.email}
    `;

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
          parse_mode: "HTML",
        }),
      });

      if (response.ok) {
        alert("Заявка успешно отправлена!");
        setFormData({ name: "", phone: "", email: "", policy: false });
      } else {
        alert("Ошибка при отправке. Попробуйте позже.");
      }
    } catch (error) {
      alert("Ошибка подключения. Попробуйте позже.");
    }
  };

  return (
    <section className="apply">
      <div className="apply-card">
        <div className="apply-left">
          <h2>{t("form.title")}</h2>
        </div>

        <form className="apply-right" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder={t("form.name")}
            required
            className="input-full"
            value={formData.name}
            onChange={handleChange}
          />

          <div className="apply-row">
            <input
              type="tel"
              name="phone"
              placeholder={t("form.phone")}
              required
              value={formData.phone}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder={t("form.email")}
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="button-row">
            <button type="submit">{t("form.button")}</button>
          </div>

          <label className="policy">
            <input
              type="checkbox"
              name="policy"
              checked={formData.policy}
              onChange={handleChange}
              required
            />
            <span>
              {t("form.policyText")}{" "}
              <a href="/privacy" className="policy-link" target="_blank" rel="noreferrer">
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
