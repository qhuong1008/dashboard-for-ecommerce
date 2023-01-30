import { axiosInstance } from "../api/types/axios";
const getAllUsers = async () => {
  return await axiosInstance.get("/api/nguoidung");
};
const getUserById = async (id) => {
  return await axiosInstance.get(`/api/nguoidung/${id}`);
};
const deleteUserById = async (id) => {
  return await axiosInstance.post(`/api/nguoidung/delete/${id}`);
};
const addUser = async (user) => {
  return await axiosInstance.post("/api/nguoidung/add", user);
};
const editUser = async (user) => {
  return await axiosInstance.post("/api/nguoidung/edit", user);
};
export { getAllUsers, getUserById, deleteUserById, addUser, editUser };
