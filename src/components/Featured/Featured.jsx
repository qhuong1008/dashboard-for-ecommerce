import React from "react";
import "./Featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { orderListSelector } from "../../redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import { loadOrderList } from "../../redux/actions/OrderAction";
import { useState, useEffect } from "react";

const Featured = () => {
  const dispatch = useDispatch();
  const zorderList = useSelector(orderListSelector);

  let orderList = zorderList.filter((order) => {
    return order.DaXoa === false;
  });
  var currentdate = new Date();
  var datetime =
    currentdate.getFullYear() +
    "-" +
    currentdate.getMonth() +
    1 +
    "-" +
    currentdate.getDate();
  let revenue = 0;
  const todayRevenue = () => {
    orderList.forEach((order) => {
      if (datetime === order.ThoiGianGiaoHang.substring(0, 10)) {
        revenue = revenue + order.TongThanhToan;
      }
    });
  };
  // console.log(revenue);
  todayRevenue();
  useEffect(() => {
    dispatch(loadOrderList());
  }, []);
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featured-chart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div>
        <p className="title">Total sales made today</p>
        <p className="amount">{revenue} đ</p>
        <p className="desc">
          Previous transactions processing. Last payments cannot be included
        </p>
        <div className="summary">
          <div className="item">
            <div className="item-title">Target</div>
            <div className="item-result positive">
              <KeyboardArrowDownIcon fontSize="small" />
              <div className="result-amount">$12.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="item-title">Last Week</div>
            <div className="item-result negative">
              <KeyboardArrowDownIcon fontSize="small" />
              <div className="result-amount">$12.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="item-title">Last Month</div>
            <div className="item-result positive">
              <KeyboardArrowDownIcon fontSize="small" />
              <div className="result-amount">$12.4k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
