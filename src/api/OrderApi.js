import { axiosInstance } from "./types/axios";

const loadAllOrders = async () => {
  return await axiosInstance.get("/api/hoadon");
};
const getOrderById = async (id) => {
  return await axiosInstance.get(`/api/hoadon/orderId/${id}`);
};
const editOrder = async (order) => {
  return await axiosInstance.post("api/hoadon/edit", order);
};
export { loadAllOrders, getOrderById, editOrder };
