import { Home } from "./Screens/Home"
import { LandingPage } from "./Screens/LandingPage";
import { Navb } from "./Components/Navb"
import { Route, Routes } from "react-router-dom";
import { Login } from "./Screens/Login";
import { About } from "./Screens/About";
import { Courses } from "./Screens/Courses";
import { DetailCourses } from './Screens/Courses//DetailCourses'
import { ContactUs } from "./Screens/Contactus";
import { Register } from "./Screens/Register";
import { MyCourses } from './Screens/Student/MyCourses'
import { StudentDashboard } from "./Screens/Student/Dashboard";
import { MyLearning } from "./Screens/Student/MyLearning";
import { Profile } from "./Screens/Student/Profile";
import { Notifications } from "./Screens/Student/Notification";
import { ProtectedAdmin } from "./Components/Admin/ProtectedAdmin";
import {AdminLayout} from "./Components/Layouts/AdminLayout";

import {Dashboard} from "./Screens/Admin/Dashboard";
import {ManageStudent} from "./Screens/Admin/ManageStudent";
import {ManageInstructor} from "./Screens/Admin/ManageInstructor";
import {ManageCourse} from "./Screens/Admin/ManageCourse";
import {AddCourses} from "./Screens/Admin/AddCourses";
import {EditCourses} from "./Screens/Admin/EditCourses";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/about' element={<About />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path="/courses/:id" element={<DetailCourses />} />
        <Route path='/myCourses' element={<MyCourses />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/learning/:id" element={<MyLearning />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route
          path="/admin"
          element={
            <ProtectedAdmin>
              <AdminLayout />
            </ProtectedAdmin>
          }
        >
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="users" element={<ManageStudent />} />
          <Route path="instructors" element={<ManageInstructor />} />
          <Route path="courses" element={<ManageCourse />} />
          <Route path="courses/add" element={<AddCourses />} />
          <Route path="courses/edit/:id" element={<EditCourses />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
