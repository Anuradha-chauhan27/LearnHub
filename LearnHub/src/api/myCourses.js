import API from "./authApi";

export const getMyCourses = async () => {
  const token = localStorage.getItem("token");

  const response = await API.get("/enrollment/mycourses", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};