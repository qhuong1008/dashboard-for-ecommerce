import { axiosInstance } from "./types/axios";

const loadAllOrders = async () => {
  return await axiosInstance.get("/api/hoadon");
};
const getOrderById = async (id) => {
  return await axiosInstance.get(`/api/hoadon/orderId/${id}`);
};

export { loadAllOrders, getOrderById };
