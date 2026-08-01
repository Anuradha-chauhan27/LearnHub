import API from "./authApi";

export const enrollCourse = async (courseId) => {
  const token = localStorage.getItem("token");

  const response = await API.post(
    "/enrollment/enroll",
    {
      courseId,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};


export const checkEnrollment = async (courseId) => {
  const response = await API.get(`/enrollment/check/${courseId}`, {
    headers:{
      Authorization:`Bearer ${localStorage.getItem("token")}`
    }
  });

  return response.data;
};