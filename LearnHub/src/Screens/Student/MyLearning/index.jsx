import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Navb } from "../../../Components/Navb";
import Footer from "../../../Components/Footer";
import { getCourseById } from "../../../api/courseApi";
import { ProgressBar } from "react-bootstrap";
import '../../../assets/css/myLearning.css'

export const MyLearning = () => {
    const { id } = useParams();
    console.log(id);
    const [course, setCourse] = useState(null);
    const [currentVideo, setCurrentVideo] = useState(0);
    const [completedVideos, setCompletedVideos] = useState([0]);
    const [canComplete, setCanComplete] = useState(false);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const data = await getCourseById(id);
                setCourse(data.course)
                console.log(data.course);

            } catch (error) {
                console.log(error)
            }

        }
        fetchCourses();
    }, [id])

    if (!course) {
        return (
            <>
                <Navb />
                <div className="text-center text-white mt-5">
                    <h2>Loading...</h2>
                </div>
                <Footer />
            </>
        );
    }
    console.log(course);
    console.log(course.videos);
    console.log(course.videos[0]);
    const progress = course.videos?.length
        ? Math.round((completedVideos.length / course.videos.length) * 100)
        : 0;
    const handleComplete = () => {
        if (!completedVideos.includes(currentVideo)) {
            setCompletedVideos([...completedVideos, currentVideo]);
        }

        if (
            currentVideo < course.videos.length - 1 &&
            !completedVideos.includes(currentVideo + 1)
        ) {
            setCompletedVideos((prev) => [...prev, currentVideo + 1]);
        }
    };
    const handleVideoProgress = (e) => {
        const video = e.target;

        const watchedPercentage =
            (video.currentTime / video.duration) * 100;

        if (watchedPercentage >= 90) {
            setCanComplete(true);
        }
    };
    
    return (
        <>
            <Navb />
            <div className="learning-page">

                <h2 className="course-title">{course.title}</h2>

                <div className="learning-layout">

                    <div className="video-section">

                        <div className="video-player">

                            <video
                                key={currentVideo}
                                controls
                                width="100%"
                                poster={course.images?.[0]}
                                onTimeUpdate={handleVideoProgress}
                            >
                                <source
                                    src={course.videos[currentVideo]?.url}
                                    type="video/mp4"
                                />
                                Your browser does not support the video tag.
                            </video>
                        </div>

                        <h3 className="video-title">
                            {course.videos[currentVideo]?.title}
                        </h3>
                        <p className="video-description">
                            {course.videos[currentVideo]?.desc}
                        </p>

                    </div>

                    <div className="playlist">

                        <h3>📚 Course Content</h3>

                        {course.videos.map((video, index) => (

                            <div
                                key={index}
                                className={`lesson ${currentVideo === index ? "active" : ""}
                                ${!completedVideos.includes(index) ? "locked" : ""}`}

                                onClick={() => {
                                    if (completedVideos.includes(index)) {
                                        setCurrentVideo(index);
                                    } else {
                                        alert("Please complete the previous chapter first.");
                                    }
                                }}                    >
                                <span>
                                    {completedVideos.includes(index) ? "🎥" : "🔒"} {video.title}
                                </span>

                                {currentVideo === index && (
                                    <span className="playing">▶</span>
                                )}

                            </div>

                        ))}

                    </div>

                </div>

                <ProgressBar
                    now={progress}
                    label={`${progress}%`}
                    className="progress-custom mt-4"
                />

                <div className="learning-buttons">

                    <button
                        className="prev-btn"
                        disabled={currentVideo === 0}
                        onClick={() => setCurrentVideo(currentVideo - 1)}
                    >
                        ⬅ Previous
                    </button>
                    <button
                        disabled={!canComplete}
                        onClick={handleComplete}
                    >
                        ✅ Mark as Complete
                    </button>

                    <button
                        className="next-btn"
                        disabled={currentVideo === course.videos.length - 1}
                        onClick={() => {
                            if (completedVideos.includes(currentVideo + 1)) {
                                setCurrentVideo(currentVideo + 1);
                            } else {
                                alert("Complete this chapter first.");
                            }
                        }}
                    >
                        Next ➜
                    </button>

                </div>

            </div>
            <Footer />
        </>
    );
};

