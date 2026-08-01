import { NavLink } from "react-router-dom";
import "../../../assets/css/admin.css";

export const SideBar = () => {
  return (
    <aside className="sidebar">

      <h2>LearnHub</h2>

      <NavLink to="/admin/dashboard">Dashboard</NavLink>

      <NavLink to="/admin/users">Students</NavLink>

      <NavLink to="/admin/instructors">Instructors</NavLink>

      <NavLink to="/admin/courses">Courses</NavLink>

      <NavLink to="/admin/courses/add">Add Course</NavLink>

    </aside>
  );
};

