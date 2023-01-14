import React from "react";
import "./Single.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Chart from "../../components/Chart/Chart";
import List from "../../components/Table/Table";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="singleTitle">Information</h1>
            <div className="itemInfo">
              <div className="item">
                <img
                  src="https://cf.shopee.vn/file/bf0f0a48f63cea8298a2373d62e597d0"
                  className="itemImg"
                  alt=""
                />
              </div>
              <div className="details">
                <h1 className="itemTitle">Alissa Violet</h1>
                <div className="detailItem">
                  <div className="itemKey">Email:</div>
                  <div className="itemValue">alissa23@gmail.com</div>
                </div>
                <div className="detailItem">
                  <div className="itemKey">Phone:</div>
                  <div className="itemValue">+1 234 567 89</div>
                </div>
                <div className="detailItem">
                  <div className="itemKey">Address:</div>
                  <div className="itemValue">
                    Elton st. 234 Garden Yd. New York
                  </div>
                </div>
                <div className="detailItem">
                  <div className="itemKey">Country:</div>
                  <div className="itemValue">USA</div>
                </div>
              </div>
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

export default Single;
