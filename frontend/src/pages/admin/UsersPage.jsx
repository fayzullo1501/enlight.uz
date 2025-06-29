import { useEffect, useState } from "react";
import axios from "axios";
import AdminPanel from "../../components/AdminPanel";
import "../../styles/UsersPage.css";
import UserModal from "../../components/UserModal"; // Подключаем модальное окно

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const { data } = await axios.get("http://localhost:5001/api/users");
      setUsers(data);
    } catch (error) {
      console.error("Ошибка загрузки пользователей:", error);
    }
  };

  return (
    <AdminPanel>
      <div className="users-content">
        <button className="add-btn" onClick={() => setIsModalOpen(true)}>Добавить</button>
        <div className="table-container">
          <table className="users-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Фото</th>
                <th>ФИО</th>
                <th>Роль</th>
                <th>Телефон</th>
                <th>Логин</th>
                <th>Email</th>
                <th>Паспорт</th>
                <th>Дата регистрации</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <td>{user._id}</td>
                  <td>
                    <img
                      src={user.photo ? `http://localhost:5001/${user.photo}` : "http://localhost:5001/uploads/default.jpg"}
                      alt="User"
                      className="user-avatar"
                    />
                  </td>
                  <td>{user.fullName}</td>
                  <td>{user.role}</td>
                  <td>{user.phone}</td>
                  <td>{user.login}</td>
                  <td>{user.email}</td>
                  <td>{user.passport?.series || "—"} {user.passport?.number || "—"}</td>
                  <td>{new Date(user.createdAt).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Подключаем модальное окно */}
      {isModalOpen && <UserModal onClose={() => setIsModalOpen(false)} onUserAdded={fetchUsers} />}
    </AdminPanel>
  );
};

export default UsersPage;
