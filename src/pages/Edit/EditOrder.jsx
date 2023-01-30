import React from "react";
import "./Edit.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Loading from "../../components/Loading/Loading";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { orderSelector } from "../../redux/selectors";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { loadOrderById, editOrder } from "../../redux/actions/OrderAction";
import {
  getAllProductType,
  addNewProduct,
} from "../../redux/actions/ProductAction";
import { productTypeListSelector } from "../../redux/selectors";

const EditOrder = () => {
  const params = useParams();
  console.log(params);
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.order.loading);
  let order = useSelector(orderSelector);
  console.log(order);
  const [maHD, setMaHD] = useState(order.MaHoaDon);
  const [ghichu, setGhichu] = useState(order.GhiChu);
  const [tongthanhtoan, setTongthanhtoan] = useState(order.TongThanhToan);
  const [hoten, setHoten] = useState(order.HoTen);
  const [diachigiaohang, setDiachigiaohang] = useState(order.DiaChiGiaoHang);
  const [sodienthoai, setSodienthoai] = useState(order.SoDienThoai);
  const [maKH, setMaKH] = useState(order.MaKhachHang);
  const [thoigiangiaohang, setThoigiangiaohang] = useState(
    order.ThoiGianGiaoHang
  );
  const [trangthaigiaohang, setTrangthaigiaohang] = useState(
    order.TrangThaiGiaoHang
  );
  const [trangthaidonhang, setTrangthaidonhang] = useState(
    order.TrangThaiDonHang
  );
  const [trangthaithanhtoan, setTrangthaithanhtoan] = useState(
    order.TrangThaiThanhToan
  );

  let auth = 0;
  const Authentication = () => {
    if (
      maHD == "" ||
      ghichu == "" ||
      tongthanhtoan == "" ||
      hoten == "" ||
      diachigiaohang == "" ||
      sodienthoai == "" ||
      maKH == "" ||
      (thoigiangiaohang == "") | (trangthaigiaohang == "") ||
      trangthaidonhang == "" ||
      trangthaithanhtoan == ""
    ) {
      auth = 1;
    }
  };
  const handleEditOrder = () => {
    // Authentication();
    // if (auth === 1) {
    //   alert("Please enter full information!");
    // } else {
    // }
    order.MaHoaDon = maHD;
    order.GhiChu = ghichu;
    order.TongThanhToan = tongthanhtoan;
    order.HoTen = hoten;
    order.DiaChiGiaoHang = diachigiaohang;
    order.SoDienThoai = sodienthoai;
    order.MaKhachHang = maKH;
    order.ThoiGianGiaoHang = thoigiangiaohang;
    order.TrangThaiDonHang = trangthaidonhang;
    order.TrangThaiGiaoHang = parseInt(trangthaigiaohang);
    order.TrangThaiThanhToan = trangthaithanhtoan;

    console.log(order);
    dispatch(editOrder(order))
      .then(() => alert("Edit order successfully!"))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    dispatch(loadOrderById(params.orderId));
  }, []);
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Edit Order</h1>
        </div>

        <div className="bottom">
          {/* <div className="left">
            <img
              src={
                hinh
                  ? hinh
                  : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/495px-No-Image-Placeholder.svg.png?20200912122019"
              }
              alt=""
            />
          </div> */}
          {isLoading ? (
            <Loading />
          ) : (
            <div className="right">
              <div className="form">
                <div className="formInput" key="1">
                  <label>Order ID: </label>
                  <input
                    disabled
                    type="text"
                    placeholder="product name"
                    value={maHD}
                    onChange={(e) => setMaHD(e.target.value)}
                  />
                </div>
                <div className="formInput" key="1">
                  <label>Customer ID: </label>
                  <input
                    disabled
                    type="text"
                    placeholder="product name"
                    value={maKH}
                    onChange={(e) => setMaKH(e.target.value)}
                  />
                </div>
                <div className="formInput" key="2">
                  <label>Customer name: </label>
                  <input
                    type="text"
                    placeholder="product name"
                    value={hoten}
                    onChange={(e) => setHoten(e.target.value)}
                  />
                </div>
                <div className="formInput" key="3">
                  <label>Order Note: </label>
                  <textarea
                    type="text"
                    placeholder="product info"
                    value={ghichu}
                    onChange={(e) => setGhichu(e.target.value)}
                  />
                </div>
                <div className="formInput" key="4">
                  <label>Total bill: </label>
                  <input
                    disabled
                    type="text"
                    placeholder="product info"
                    value={tongthanhtoan}
                    onChange={(e) => setTongthanhtoan(e.target.value)}
                  />
                </div>
                <div className="formInput" key="5">
                  <label>Address: </label>
                  <textarea
                    type="text"
                    placeholder="product info"
                    value={diachigiaohang}
                    onChange={(e) => setDiachigiaohang(e.target.value)}
                  />
                </div>
                <div className="formInput" key="6">
                  <label>Phone number: </label>
                  <textarea
                    type="text"
                    placeholder="product info"
                    value={sodienthoai}
                    onChange={(e) => setSodienthoai(e.target.value)}
                  />
                </div>
                <div className="formInput" key="7">
                  <label>Deliver time: </label>
                  <input
                    disabled
                    type="text"
                    placeholder="product info"
                    value={thoigiangiaohang}
                    onChange={(e) => setThoigiangiaohang(e.target.value)}
                  />
                </div>

                <div className="formInput" key="8">
                  <label>Order status: </label>
                  <select
                    value={trangthaidonhang}
                    onChange={(e) => {
                      setTrangthaidonhang(e.target.value);
                    }}
                  >
                    <option value={"0"}>Not confirmed</option>
                    <option value={"1"}>Confirmed</option>
                  </select>
                </div>
                <div className="formInput" key="9">
                  <label>Deliver status: </label>
                  <select
                    value={trangthaigiaohang}
                    onChange={(e) => {
                      setTrangthaigiaohang(e.target.value);
                    }}
                  >
                    <option value={0}>Not delivered</option>
                    <option value={1}>Delivering</option>
                    <option value={2}>Delivered</option>
                  </select>
                </div>
                <div className="formInput" key="10">
                  <label>Payment status: </label>
                  <select
                    value={trangthaithanhtoan}
                    onChange={(e) => {
                      console.log(e.target.value);
                      setTrangthaithanhtoan(e.target.value);
                      // setMalsp(e.target.value);
                    }}
                  >
                    <option value={"false"}>Unpaid</option>
                    <option value={"true"}>Paid</option>
                  </select>
                </div>
                <button onClick={() => handleEditOrder()}>Send</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EditOrder;
