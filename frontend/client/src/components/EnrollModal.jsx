import { useState } from "react";
import "./EnrollModal.css";

function EnrollModal({ isOpen, onClose }) {
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
    if (!formData.policy) return alert("Вы должны принять политику конфиденциальности.");

    const message = `
📩 Новая заявка:
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
        onClose();
      } else {
        alert("Ошибка при отправке.");
      }
    } catch {
      alert("Ошибка подключения.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <h2>Записаться на курс или получить бесплатную консультацию</h2>
        <form className="modal-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Имя"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <div className="modal-row">
            <input
              type="tel"
              name="phone"
              placeholder="Телефон"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <label className="modal-policy">
            <input
              type="checkbox"
              name="policy"
              checked={formData.policy}
              onChange={handleChange}
              required
            />
            <span>
              Отправляя заявку, вы даёте согласие на обработку своих персональных данных в соответствии с {" "}
              <a href="/privacy" target="_blank" rel="noreferrer">
                политикой конфиденциальности
              </a>
            </span>
          </label>
          <button type="submit">Отправить</button>
        </form>
      </div>
    </div>
  );
}

export default EnrollModal;
