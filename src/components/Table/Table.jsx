import React, { useEffect } from "react";
import "./Table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { orderListSelector } from "../../redux/selectors";
import { loadOrderList } from "../../redux/actions/OrderAction";
import Loading from "../../components/Loading/Loading";

const List = () => {
  const isLoading = useSelector((state) => state.order.loading);

  // get data
  const dispatch = useDispatch();
  let orderList = useSelector(orderListSelector);
  orderList = orderList.filter((order) => {
    return order.DaXoa === false;
  });
  orderList = orderList.slice(0, 5);
  useEffect(() => {
    dispatch(loadOrderList());
  }, []);
  const rows = [
    {
      id: 1143155,
      product: "Acer Nitro 5",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "John Smith",
      date: "1 March",
      amount: 785,
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 2235235,
      product: "Playstation 5",
      img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Michael Doe",
      date: "1 March",
      amount: 900,
      method: "Online Payment",
      status: "Pending",
    },
    {
      id: 2342353,
      product: "Redragon S101",
      img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "John Smith",
      date: "1 March",
      amount: 35,
      method: "Cash on Delivery",
      status: "Pending",
    },
    {
      id: 2357741,
      product: "Razer Blade 15",
      img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Jane Smith",
      date: "1 March",
      amount: 920,
      method: "Online",
      status: "Approved",
    },
    {
      id: 2342355,
      product: "ASUS ROG Strix",
      img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Harold Carol",
      date: "1 March",
      amount: 2000,
      method: "Online",
      status: "Pending",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Order ID</TableCell>
            <TableCell className="tableCell">Client Name</TableCell>
            <TableCell className="tableCell">Client Id</TableCell>
            <TableCell className="tableCell">Total Bill</TableCell>
            <TableCell className="tableCell">Address</TableCell>
            <TableCell className="tableCell">Phone</TableCell>
            <TableCell className="tableCell">Delivery Time</TableCell>
            <TableCell className="tableCell">Delivery Status</TableCell>
            <TableCell className="tableCell">Order Status</TableCell>
            <TableCell className="tableCell">Payment Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orderList.map((orderList) => (
            <TableRow key={orderList.id}>
              <TableCell className="tableCell">{orderList.MaHoaDon}</TableCell>
              {/* <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={orderList.img} alt="" className="image" />
                  {orderList.product}
                </div>
              </TableCell> */}
              <TableCell className="tableCell">{orderList.HoTen}</TableCell>
              <TableCell className="tableCell">
                {orderList.MaKhachHang}
              </TableCell>
              <TableCell className="tableCell">
                {orderList.TongThanhToan}
              </TableCell>
              <TableCell className="tableCell">
                {orderList.DiaChiGiaoHang}
              </TableCell>
              <TableCell className="tableCell">
                {orderList.SoDienThoai}
              </TableCell>
              <TableCell className="tableCell">
                {orderList.ThoiGianGiaoHang}
              </TableCell>
              <TableCell className="tableCell">
                {orderList.TrangThaiGiaoHang}
              </TableCell>
              <TableCell className="tableCell">
                {orderList.TrangThaiDonHang}
              </TableCell>
              <TableCell className="tableCell">
                {orderList.TrangThaiThanhToan}
              </TableCell>

              <TableCell className="tableCell">
                <span className={`status ${orderList.status}`}>
                  {orderList.status}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
