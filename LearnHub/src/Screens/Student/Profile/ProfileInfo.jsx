import "../../../assets/css/profile.css"
import {
    FaUserGraduate, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCalendarAlt, FaBookOpen, FaClock, FaFire, FaAward, FaEdit,
} from "react-icons/fa";

export const ProfileInfo = () => {
    return (
        <div className="profile-container">

            <div className="cover-section">
                <div className="cover-overlay"></div>
                    

                <div className="profile-header">
                    <div className="avatar-ring">
                        <div className="profile-avatar">
                            A
                        </div>
                    </div>

                    <div className="profile-text">
                        <h2>Anuradha</h2>
                        <p>MCA Student</p>

                        <button className="edit-btn">
                            <FaEdit /> Edit Profile
                        </button>
                    </div>
                </div>
            </div>

            <div className="profile-grid">

                <div className="left-column">

                    <div className="card">
                        <h3>About Me</h3>

                        <p>
                            Passionate MCA student interested in Web Development,
                            Artificial Intelligence and Problem Solving. Currently
                            building a professional Learning Management System using
                            React, Node.js and MongoDB.
                        </p>
                    </div>

                    <div className="card">

                        <h3>Personal Information</h3>

                        <div className="info">

                            <div>
                                <FaUserGraduate />
                                <span>Anuradha</span>
                            </div>

                            <div>
                                <FaEnvelope />
                                <span>anuradha@gmail.com</span>
                            </div>

                            <div>
                                <FaPhone />
                                <span>+91 9876543210</span>
                            </div>

                            <div>
                                <FaMapMarkerAlt />
                                <span>Yamunanagar, Haryana</span>
                            </div>

                            <div>
                                <FaCalendarAlt />
                                <span>Joined July 2026</span>
                            </div>

                        </div>

                    </div>

                </div>


                <div className="right-column">

                    <div className="stats">

                        <div className="stat-card">
                            <FaBookOpen />
                            <h2>8</h2>
                            <p>Courses</p>
                        </div>

                        <div className="stat-card">
                            <FaAward />
                            <h2>3</h2>
                            <p>Certificates</p>
                        </div>

                        <div className="stat-card">
                            <FaFire />
                            <h2>15</h2>
                            <p>Streak</p>
                        </div>

                        <div className="stat-card">
                            <FaClock />
                            <h2>42h</h2>
                            <p>Learning</p>
                        </div>

                    </div>

                    <div className="card">

                        <h3>Achievements 🏆</h3>

                        <ul className="achievement-list">
                            <li>🏅 First Course Completed</li>
                            <li>🔥 15 Days Learning Streak</li>
                            <li>⭐ Top Learner Badge</li>
                            <li>🎯 Completed React Bootcamp</li>
                        </ul>

                    </div>

                    <div className="card">

                        <h3>Recent Activity</h3>

                        <div className="activity">
                            <p>✅ React Chapter 5 Completed</p>
                            <p>✅ JavaScript Quiz Passed</p>
                            <p>✅ Node.js Authentication Started</p>
                            <p>🏆 Earned React Certificate</p>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};