import { useEffect, useState } from "react";
import axios from "axios";
import {StatsCard} from "../../../Components/Admin/StatsCard";
import '../../../assets/css/admin.css'

export const Dashboard = () => {

  const [stats, setStats] = useState({
    students: 0,
    instructors: 0,
    courses: 0,
    enrollments: 0,
  });

  useEffect(() => {

    fetchDashboard();

  }, []);

  const fetchDashboard = async () => {

    try {

      const token = localStorage.getItem("token");

      const { data } = await axios.get(
        "http://localhost:5000/api/admin/dashboard",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setStats(data);

    } catch (error) {

      console.log(error);

    }

  };

  return (
    <div className="dashboard">

    <h2>Dashboard</h2>

    <div className="stats-grid">

        <StatsCard title="Students" value={stats.students} icon="🎓" />

        <StatsCard title="Instructors" value={stats.instructors} icon="👨‍🏫" />

        <StatsCard title="Courses" value={stats.courses} icon="📚" />

        <StatsCard title="Enrollments" value={stats.enrollments} icon="📝" />

    </div>

    <div className="dashboard-bottom">

        <div className="recent-card">

            <h3>Recent Activity</h3>

            <p>• New Student Registered</p>

            <p>• React Course Added</p>

            <p>• Python Course Updated</p>

        </div>

        <div className="recent-card">

            <h3>Quick Actions</h3>

            <button>Add Course</button>

            <button>Add Instructor</button>

        </div>

    </div>

</div>
  );
};

