import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { orderSelector } from "../../redux/selectors";
import { loadOrderById } from "../../redux/actions/OrderAction";
import "./Single.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Chart from "../../components/Chart/Chart";
import List from "../../components/Table/Table";
import Loading from "../../components/Loading/Loading";
import { Link } from "react-router-dom";

const SingleOrder = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const order = useSelector(orderSelector);
  const isLoading = useSelector((state) => state.order.loading);

  useEffect(() => {
    dispatch(loadOrderById(params.orderId));
  }, []);

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <Link to={`/orders/edit/${params.orderId}`}>
              <div className="editButton">Edit</div>
            </Link>
            <h1 className="singleTitle">Information</h1>
            <div className="itemInfo">
              {isLoading ? (
                <Loading />
              ) : (
                <div className="details">
                  <h1 className="itemTitle">Order</h1>
                  <div className="detailItem">
                    <div className="itemKey">Order Id:</div>
                    <div className="itemValue">{order.MaHoaDon}</div>
                  </div>
                  <div className="detailItem">
                    <div className="itemKey">Note:</div>
                    <div className="itemValue">{order.GhiChu}</div>
                  </div>
                  <div className="detailItem">
                    <div className="itemKey">Total Bill:</div>
                    <div className="itemValue">{order.TongThanhToan}</div>
                  </div>
                  <div className="detailItem">
                    <div className="itemKey">Client Name:</div>
                    <div className="itemValue">{order.HoTen}</div>
                  </div>
                  <div className="detailItem">
                    <div className="itemKey">Client Id:</div>
                    <div className="itemValue">{order.MaKhachHang}</div>
                  </div>
                  <div className="detailItem">
                    <div className="itemKey">Address:</div>
                    <div className="itemValue">{order.DiaChiGiaoHang}</div>
                  </div>
                  <div className="detailItem">
                    <div className="itemKey">Phone Number:</div>
                    <div className="itemValue">{order.SoDienThoai}</div>
                  </div>
                  <div className="detailItem">
                    <div className="itemKey">Delivery Time:</div>
                    <div className="itemValue">{order.ThoiGianGiaoHang}</div>
                  </div>
                  <div className="detailItem">
                    <div className="itemKey">Order Status:</div>
                    <div className="itemValue">{order.TrangThaiDonHang}</div>
                  </div>
                  <div className="detailItem">
                    <div className="itemKey">Delivery Status:</div>
                    <div className="itemValue">{order.TrangThaiGiaoHang}</div>
                  </div>
                  <div className="detailItem">
                    <div className="itemKey">Payment Status:</div>
                    <div className="itemValue">{order.TrangThaiThanhToan}</div>
                  </div>
                  <div className="detailItem">
                    <div className="itemKey">Deleted:</div>
                    <div className="itemValue">{order.DaXoa}</div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="right">
            <Chart title="User spending (Last 6 Months )" className="chart" />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <List />
        </div>
      </div>
    </div>
  );
};

export default SingleOrder;
