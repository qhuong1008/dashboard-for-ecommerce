import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { userSelector } from "../../redux/selectors";
import { loadUserById } from "../../redux/actions/UserAction";
import "./Single.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Chart from "../../components/Chart/Chart";
import List from "../../components/Table/Table";
import Loading from "../../components/Loading/Loading";

const SingleUser = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const user = useSelector(userSelector);
  const isLoading = useSelector((state) => state.user.loading);

  useEffect(() => {
    dispatch(loadUserById(params.userId));
  }, []);
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="singleTitle">Information</h1>
            {isLoading ? (
              <Loading />
            ) : (
              <div className="itemInfo">
                <div className="item">
                  <img
                    src="https://cf.shopee.vn/file/bf0f0a48f63cea8298a2373d62e597d0"
                    className="itemImg"
                    alt=""
                  />
                </div>
                <div className="details">
                  <h1 className="itemTitle">{user.HoTen} </h1>
                  <div className="detailItem">
                    <div className="itemKey">User Id:</div>
                    <div className="itemValue">{user.MaNguoiDung}</div>
                  </div>
                  <div className="detailItem">
                    <div className="itemKey">Date of birth:</div>
                    <div className="itemValue">{user.NgaySinh}</div>
                  </div>
                  <div className="detailItem">
                    <div className="itemKey">Role:</div>
                    <div className="itemValue">
                      {user.RoleID === "001" ? "Client" : "Administrator"}
                    </div>
                  </div>
                  <div className="detailItem">
                    <div className="itemKey">Address:</div>
                    <div className="itemValue">{user.DiaChi}</div>
                  </div>
                </div>
              </div>
            )}
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

export default SingleUser;
