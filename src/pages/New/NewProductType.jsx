import React from "react";
import "./New.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Loading from "../../components/Loading/Loading";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addNewProductType } from "../../redux/actions/ProductAction";

const NewProductType = () => {
  const dispatch = useDispatch();
  const [tenlsp, setTenlsp] = useState("");
  const isLoading = useSelector((state) => state.product.loading);
  const handleAddProductType = () => {
    if (tenlsp === "") {
      alert("Please enter full information!");
    } else {
      let sanpham = {};
      sanpham.tenlsp = tenlsp;
      dispatch(addNewProductType(sanpham))
        .then(() => alert("Add new product type successfully!"))
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add New Product Type</h1>
        </div>

        <div className="bottom">
          {isLoading ? (
            <Loading />
          ) : (
            <div className="right">
              <div className="form">
                <div className="formInput" key="1">
                  <label>Product type name: </label>
                  <input
                    type="text"
                    placeholder="product type name"
                    value={tenlsp}
                    onChange={(e) => setTenlsp(e.target.value)}
                  />
                </div>
                <button onClick={() => handleAddProductType()}>Send</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewProductType;
