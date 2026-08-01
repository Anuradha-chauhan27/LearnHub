import API from "../api/authApi";

export const getAllCourses = async () => {
  const response = await API.get("/courses");
  return response.data;
};

export const getCourseById = async (id) => {
  const response = await API.get(`/courses/${id}`);
  return response.data;
};