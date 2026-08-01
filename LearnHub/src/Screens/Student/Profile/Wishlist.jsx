import { useEffect, useState } from "react";
import axios from "axios";
import "../../../assets/css/profile.css";
import { FaHeart, FaStar, FaClock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const Wishlist = () => {
    const [courses, setCourses] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchWishlist();
    }, []);

    const fetchWishlist = async () => {
        try {
            const token = localStorage.getItem("token");

            const { data } = await axios.get(
                "http://localhost:5000/api/wishlist",
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            setCourses(data.wishlist);
        } catch (error) {
            console.log("Wishlist Error:", error);
        }
    };

    const removeWishlist = async (id) => {
        try {
            const token = localStorage.getItem("token");

            await axios.delete(
                `http://localhost:5000/api/wishlist/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            setCourses((prev) => prev.filter((item) => item._id !== id));
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="wishlist-page">

            <h2>❤️ Wishlist</h2>

            <div className="wishlist-grid">

                {courses.length > 0 ? (
                    courses.map((item) => (

                        <div className="wishlist-card" key={item._id}>

                            <div className="wishlist-image">

                                <img
                                    src={item.course.images[0]}
                                    alt={item.course?.title}
                                />

                                <div className="wishlist-overlay">

                                    <span className="course-level">
                                        {item.course?.level || "Beginner"}
                                    </span>

                                    <button className="favorite-btn">
                                        <FaHeart />
                                    </button>

                                </div>

                                <div className="course-progress-badge">
                                    80% Complete
                                </div>

                            </div>

                            <div className="wishlist-content">

                                <h3>{item.course?.title}</h3>

                                <div className="wishlist-info">

                                    <span>
                                        <FaStar />
                                        {" "}
                                        {item.course?.rating || "4.8"}
                                    </span>

                                    <span>
                                        <FaClock />
                                        {" "}
                                        {item.course?.duration || "12 Hours"}
                                    </span>

                                </div>

                                <p>{item.course?.level || "Beginner"}</p>

                                <div className="wishlist-buttons">

                                    <button
                                        className="remove-btn"
                                        onClick={() =>
                                            removeWishlist(item._id)
                                        }
                                    >
                                        Remove
                                    </button>

                                    <button
                                        className="view-btn"
                                        onClick={() =>
                                            navigate(`/courses/${item.course._id}`)
                                        }
                                    >
                                        View Course
                                    </button>

                                </div>

                            </div>

                        </div>

                    ))
                ) : (

                    <div
                        style={{
                            width: "100%",
                            textAlign: "center",
                            padding: "80px 0",
                            color: "#fff",
                        }}
                    >
                        <FaHeart
                            style={{
                                fontSize: "60px",
                                color: "#ff4d6d",
                                marginBottom: "20px",
                            }}
                        />

                        <h2>Your Wishlist is Empty</h2>

                        <p style={{ color: "#aaa" }}>
                            Save your favourite courses here.
                        </p>

                    </div>

                )}

            </div>

        </div>
    );
};