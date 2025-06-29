import { useState } from "react";
import axios from "axios";
import "../styles/UserModal.css";

const UserModal = ({ onClose, onUserAdded }) => {
  // Фиксированные роли
  const roles = [
    { value: "admin", label: "Администратор" },
    { value: "teacher", label: "Преподаватель" },
    { value: "student", label: "Студент" }
  ];

  const [formData, setFormData] = useState({
    fullName: "",
    photo: null,
    role: "",
    phone: "",
    login: "",
    password: "",
    email: "",
    passportSeries: "",
    passportNumber: "",
  });

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, photo: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Проверка на обязательные поля
    if (!formData.fullName || !formData.role || !formData.phone || !formData.login || !formData.password || !formData.email) {
      setErrorMessage("Все обязательные поля должны быть заполнены!");
      return;
    }

    setLoading(true);
    setErrorMessage("");

    try {
      let response;
      if (formData.photo) {
        // Если фото выбрано, отправляем `multipart/form-data`
        const userData = new FormData();
        Object.keys(formData).forEach((key) => {
          if (formData[key]) {
            userData.append(key, formData[key]);
          }
        });

        console.log("📤 Отправка данных с фото:", Object.fromEntries(userData));

        response = await axios.post("http://localhost:5001/api/users", userData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      } else {
        // Если фото нет, отправляем обычный JSON
        const userData = { ...formData };
        delete userData.photo; // Не отправляем `photo`, если оно не выбрано

        console.log("📤 Отправка данных без фото:", userData);

        response = await axios.post("http://localhost:5001/api/users", userData, {
          headers: { "Content-Type": "application/json" },
        });
      }

      console.log("✅ Ответ сервера:", response.data);

      onUserAdded(); // Обновляем таблицу
      onClose(); // Закрываем модальное окно
    } catch (error) {
      console.error("❌ Ошибка при добавлении пользователя:", error.response?.data || error.message);
      setErrorMessage(error.response?.data?.message || "Ошибка при добавлении пользователя");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Добавить пользователя</h2>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <form onSubmit={handleSubmit}>
          <input type="text" name="fullName" placeholder="ФИО *" value={formData.fullName} onChange={handleChange} required />
          <div className="imagerole-fields">
            <input type="file" accept="image/*" onChange={handleFileChange} />
            <select name="role" value={formData.role} onChange={handleChange} required>
              <option value="">Выберите роль *</option>
              {roles.map((role) => (
                <option key={role.value} value={role.value}>{role.label}</option>
              ))}
            </select>
          </div>
          <input type="text" name="phone" placeholder="Телефон *" value={formData.phone} onChange={handleChange} required />
          <div className="loginpassword-fields">
            <input type="text" name="login" placeholder="Логин *" value={formData.login} onChange={handleChange} required />
            <input type="password" name="password" placeholder="Пароль *" value={formData.password} onChange={handleChange} required />
          </div>
          <input type="email" name="email" placeholder="Email *" value={formData.email} onChange={handleChange} required />
          <div className="passport-fields">
            <input type="text" name="passportSeries" placeholder="Серия паспорта" value={formData.passportSeries} onChange={handleChange} />
            <input type="text" name="passportNumber" placeholder="Номер паспорта" value={formData.passportNumber} onChange={handleChange} />
          </div>
          <button type="submit" disabled={loading}>{loading ? "Сохранение..." : "Сохранить"}</button>
          <button type="button" onClick={onClose} className="close-btn">Отмена</button>
        </form>
      </div>
    </div>
  );
};

export default UserModal;
