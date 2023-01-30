import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { productSelector } from "../../redux/selectors";
import { loadProductById } from "../../redux/actions/ProductAction";
import "./Single.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Chart from "../../components/Chart/Chart";
import List from "../../components/Table/Table";
import Loading from "../../components/Loading/Loading";
import { Link } from "react-router-dom";

const SingleProduct = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const product = useSelector(productSelector);
  const isLoading = useSelector((state) => state.product.loading);
  console.log(product);
  useEffect(() => {
    dispatch(loadProductById(params.productId));
  }, []);

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <Link to={`/products/edit/${params.productId}`}>
              <div className="editButton">Edit</div>
            </Link>
            <h1 className="singleTitle">Information</h1>
            {isLoading ? (
              <Loading />
            ) : (
              <div className="itemInfo">
                <div className="item">
                  <img src={product.Hinh} className="itemImg" alt="" />
                </div>

                <div className="details">
                  <h1 className="itemTitle">Product</h1>
                  <div className="detailItem">
                    <div className="itemKey">Product Id:</div>
                    <div className="itemValue">{product.MaSP}</div>
                  </div>
                  <div className="detailItem">
                    <div className="itemKey">Product Name:</div>
                    <div className="itemValue">{product.TenSP}</div>
                  </div>
                  <div className="detailItem">
                    <div className="itemKey">Price:</div>
                    <div className="itemValue">{product.Gia}</div>
                  </div>
                  <div className="detailItem">
                    <div className="itemKey">Product Type:</div>
                    <div className="itemValue">{product.TenLoaiSanPham}</div>
                  </div>
                  <div className="detailItem">
                    <div className="itemKey">Product Type Id:</div>
                    <div className="itemValue">{product.MaLoaiSP}</div>
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

export default SingleProduct;
