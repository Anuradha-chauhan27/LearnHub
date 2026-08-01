import "../../../assets/css/profile.css";
import {FaBookOpen,FaClock,FaFire,FaAward,} from "react-icons/fa";
import {ResponsiveContainer,LineChart,Line,XAxis,YAxis,Tooltip,CartesianGrid,} from "recharts";

const data = [
  { day: "Week 1", progress: 10 },
  { day: "Week 2", progress: 25 },
  { day: "Week 3", progress: 20 },
  { day: "Week 4", progress: 40 },
  { day: "Week 5", progress: 35 },
  { day: "Week 6", progress: 60 },
  { day: "Week 7", progress: 55 },
  { day: "Week 8", progress: 80 },
];

export const Progress = ()=> {
  return (
<>
    <div className="progress-top">

  <div className="progress-circle">

    <svg width="180" height="180">

      <circle
        cx="90"
        cy="90"
        r="70"
        className="circle-bg"
      />

      <circle
        cx="90"
        cy="90"
        r="70"
        className="circle-progress"
      />

    </svg>

    <div className="circle-text">
      <h2>80%</h2>
      <span>Completed</span>
    </div>

  </div>

  <div className="stats-grid">

    <div className="progress-box">
      <FaBookOpen />
      <h2>8</h2>
      <p>Courses</p>
    </div>

    <div className="progress-box">
      <FaClock />
      <h2>42h</h2>
      <p>Learning</p>
    </div>

    <div className="progress-box">
      <FaFire />
      <h2>15</h2>
      <p>Streak</p>
    </div>

    <div className="progress-box">
      <FaAward />
      <h2>3</h2>
      <p>Certificates</p>
    </div>

  </div>

</div>
    <div className="chart-card">
      <h3>📈 Learning Progress</h3>

      <ResponsiveContainer width="100%" height={280}>
        <LineChart data={data}>
          <defs>
            <linearGradient id="lineColor" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#7c3aed" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>

          <CartesianGrid stroke="#334155" strokeDasharray="3 3" />

          <XAxis dataKey="day" stroke="#cbd5e1" />

          <YAxis stroke="#cbd5e1" />

          <Tooltip
            contentStyle={{
              background: "#1e293b",
              border: "none",
              borderRadius: "10px",
              color: "#fff",
            }}
          />

          <Line
            type="monotone"
            dataKey="progress"
            stroke="url(#lineColor)"
            strokeWidth={4}
            dot={{
              r: 5,
              fill: "#7c3aed",
              stroke: "#fff",
              strokeWidth: 2,
            }}
            activeDot={{
              r: 8,
              fill: "#3b82f6",
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
    <div className="goal-card">

  <div className="goal-header">
    <h3>🎯 Current Goal</h3>
    <span>80%</span>
  </div>

  <p>
    Complete the React.js course before the end of this month.
  </p>

  <div className="goal-bar">
    <div className="goal-fill"></div>
  </div>

</div>
<div className="course-card">

    <h3>Course Progress</h3>

    <div className="course-item">

        <div className="course-top">
            <span>React.js</span>
            <span>90%</span>
        </div>

        <div className="course-progress">
            <div style={{width:"90%"}}></div>
        </div>

    </div>

    <div className="course-item">

        <div className="course-top">
            <span>Node.js</span>
            <span>70%</span>
        </div>

        <div className="course-progress">
            <div style={{width:"70%"}}></div>
        </div>

    </div>

    <div className="course-item">

        <div className="course-top">
            <span>MongoDB</span>
            <span>55%</span>
        </div>

        <div className="course-progress">
            <div style={{width:"55%"}}></div>
        </div>

    </div>

</div>
<div className="achievement-card">

<h3>🏆 Achievements</h3>

<div className="badges">

<div className="badge-box">
🔥
<p>15 Days</p>
</div>

<div className="badge-box">
⭐
<p>Top Learner</p>
</div>

<div className="badge-box">
🎯
<p>React Expert</p>
</div>

<div className="badge-box">
🏅
<p>Completed</p>
</div>

</div>

</div>
    </>
  );
}