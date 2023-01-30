import React from "react";
import "./Home.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Widget from "../../components/Widget/Widget";
import Featured from "../../components/Featured/Featured";
import Chart from "../../components/Chart/Chart";
import List from "../../components/Table/Table";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="home-container">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="product" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart title="title" />
        </div>
        <div className="list-container">
          <div className="list-title">Lastest Transactions</div>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Home;
