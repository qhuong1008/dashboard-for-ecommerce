import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import UserDataTable from "../../components/DataTable/UserDataTable";
import ProductDataTable from "../../components/DataTable/ProductDataTable";
import OrderDataTable from "../../components/DataTable/OrderDataTable";
import "./List.scss";

const List = ({ listType }) => {
  return (
    <div className="list">
      <Sidebar />
      <div className="list-container">
        <Navbar />
        {listType === "User" && <UserDataTable />}
        {listType === "Product" && <ProductDataTable />}
        {listType === "Order" && <OrderDataTable />}
      </div>
    </div>
  );
};

export default List;
