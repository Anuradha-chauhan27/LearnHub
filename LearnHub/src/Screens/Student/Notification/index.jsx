import { useEffect, useState } from "react";
import axios from "axios";
import "../../../assets/css/notification.css";

export const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetchNotifications();
  }, []);

  const fetchNotifications = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        "http://localhost:5000/api/notifications",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setNotifications(res.data);
    } catch (error) {
      console.error("Notification Error:", error);
    }
  };

  return (
    <div className="notifications-page">
      <h1>🔔 Notifications</h1>

      {notifications.length === 0 ? (
        <div className="empty-notification">
          No Notifications Yet
        </div>
      ) : (
        notifications.map((item) => (
          <div className="notification-card" key={item._id}>
            <h3>{item.title}</h3>

            <p>{item.message}</p>

            <small>
              {new Date(item.createdAt).toLocaleString()}
            </small>
          </div>
        ))
      )}
    </div>
  );
};

