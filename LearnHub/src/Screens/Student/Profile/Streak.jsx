import "../../../assets/css/profile.css";
import {
  FaFire,
  FaTrophy,
  FaCheckCircle,
} from "react-icons/fa";

export const Streak = () => {
  return (
    <div className="streak-page">

      <div className="streak-banner">

        <div className="fire-circle">
          🔥
        </div>

        <h1>15 Days</h1>

        <p>
          Keep learning every day to maintain your streak.
        </p>

      </div>

      <div className="streak-stats">

        <div className="streak-card">
          <FaFire />
          <h2>15</h2>
          <p>Current</p>
        </div>

        <div className="streak-card">
          <FaTrophy />
          <h2>28</h2>
          <p>Longest</p>
        </div>

        <div className="streak-card">
          <FaCheckCircle />
          <h2>22</h2>
          <p>This Month</p>
        </div>

        <div className="streak-card">
          🎯
          <h2>Done</h2>
          <p>Today's Goal</p>
        </div>

      </div>

      <div className="calendar-card">

        <h3>Weekly Activity</h3>

        <div className="week-grid">

          <div><span>Sun</span><p>🔥</p></div>
          <div><span>Mon</span><p>🔥</p></div>
          <div><span>Tue</span><p>🔥</p></div>
          <div><span>Wed</span><p>✅</p></div>
          <div><span>Thu</span><p>🔥</p></div>
          <div><span>Fri</span><p>🔥</p></div>
          <div><span>Sat</span><p>⭐</p></div>

        </div>

      </div>

      <div className="milestone-card">

        <h3>🏆 Milestones</h3>

        <div className="milestone">
          <span>✅ 7 Day Badge</span>
        </div>

        <div className="milestone">
          <span>✅ 15 Day Badge</span>
        </div>

        <div className="milestone">
          <span>⬜ 30 Day Badge</span>
        </div>

        <div className="milestone">
          <span>⬜ 100 Day Badge</span>
        </div>

      </div>

    </div>
  );
};