import { Navb } from "../../../Components/Navb";
import Footer from "../../../Components/Footer";
import '../../../assets/css/studentDashboard.css'
import { getMyCourses } from "../../../api/myCourses";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
    FaBookOpen,
    FaChartLine,
    FaCertificate,
    FaPlayCircle,
} from "react-icons/fa";
import { ProgressBar } from "react-bootstrap";
export const StudentDashboard = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const navigate = useNavigate();
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const data = await getMyCourses();
                setCourses(data.myCourses)
                console.log(data.myCourses);

            } catch (error) {
                console.log(error)
            }

        }
        fetchCourses();
    }, [])
    return (
        <>
            <Navb />

            <div className="student-dashboard">

                <h2>
                    Welcome,
                    <span> {user?.name}</span> 👋
                </h2>

                <div className="dashboard-cards">

                    <div className="dash-card">
                        <div className="icon-box">
                            <FaBookOpen />
                        </div>

                        <h3>Enrolled Courses</h3>

                        <p>{courses.length}</p>
                    </div>

                    <div className="dash-card">
                        <div className="icon-box">
                            <FaChartLine />
                        </div>

                        <h3>Overall Progress</h3>

                        <ProgressBar
                            now={65}
                            label="65%"
                            className="custom-progress"
                        />
                    </div>

                    <div className="dash-card">
                        <div className="icon-box">
                            <FaCertificate />
                        </div>

                        <h3>Certificates</h3>

                        <p>2</p>
                    </div>

                </div>
                <div className="continue-learning">

                    <h3>
                        <FaPlayCircle /> Continue Learning
                    </h3>

                    {courses.length > 0 ? (

                        <div className="continue-card">

                            <img
                                src={courses[0].course.images[0]}
                                alt={courses[0].course.title}
                            />

                            <div className="continue-info">

                                <h4>{courses[0].course.title}</h4>

                                <ProgressBar
                                    now={45}
                                    className="custom-progress mt-2"
                                />

                            </div>

                            <button
                                onClick={() =>
                                    navigate(`/learning/${courses[0].course._id}`)
                                }
                            >
                                Continue
                            </button>

                        </div>

                    ) : (

                        <p>No enrolled courses yet.</p>

                    )}

                </div>
            </div>

            <Footer />

        </>
    );
};

