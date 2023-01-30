import { axiosInstance } from "../api/types/axios";

const getAllProducts = async () => {
  return await axiosInstance.get("/api/sanpham");
};
const getProductById = async (id) => {
  return await axiosInstance.get(`/api/sanpham/${id}`);
};
const getAllProductTypes = async () => {
  return await axiosInstance.get("/api/loaisanpham");
};
const addProduct = async (product) => {
  return await axiosInstance.post("/api/sanpham/add", product);
};
const addProductType = async (product) => {
  return await axiosInstance.post("/api/loaisanpham/add", product);
};
const deleteProductById = async (id) => {
  return await axiosInstance.post(`/api/sanpham/delete/${id}`);
};
const deleteProductTypeById = async (id) => {
  return await axiosInstance.post(`/api/loaisanpham/delete/${id}`);
};
const editProduct = async (sanpham) => {
  return await axiosInstance.post("/api/sanpham/edit", sanpham);
};
export {
  getAllProducts,
  getProductById,
  getAllProductTypes,
  addProduct,
  addProductType,
  deleteProductById,
  deleteProductTypeById,
  editProduct,
};
