import React from "react";
import "./New.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Loading from "../../components/Loading/Loading";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getAllProductType,
  addNewProduct,
} from "../../redux/actions/ProductAction";
import { productTypeListSelector } from "../../redux/selectors";

const NewProduct = () => {
  const dispatch = useDispatch();
  const [hinh, setHinh] = useState("");
  const [tensp, setTensp] = useState("");
  const [gia, setGia] = useState("");
  const [chitiet, setChitiet] = useState("");
  const isLoading = useSelector((state) => state.product.loading);
  const productTypes = useSelector(productTypeListSelector);
  const [tenlsp, setTenlsp] = useState("");
  const [malsp, setMalsp] = useState("");

  let auth = 0;
  const Authentication = () => {
    if (tensp === "" || gia === "" || chitiet === "" || malsp === "") {
      auth = 1;
    }
  };
  const handleAddProduct = () => {
    Authentication();
    if (auth === 1) {
      alert("Please enter full information!");
    } else {
      let sanpham = {};
      sanpham.hinh = hinh;
      sanpham.tenSP = tensp;
      sanpham.gia = gia;
      sanpham.chitiet = chitiet;
      sanpham.maLsp = malsp;
      dispatch(addNewProduct(sanpham))
        .then(() => alert("Add new product successfully!"))
        .catch((error) => console.log(error));
    }
  };
  const getTenLspById = (id) => {
    productTypes.filter((type) => {
      if (type.MaLoaiSP === id) {
        return type.TenLoaiSanPham;
      }
    });
  };
  useEffect(() => {
    dispatch(getAllProductType());
  }, []);
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add New Product</h1>
        </div>

        <div className="bottom">
          <div className="left">
            <img
              src={
                hinh
                  ? hinh
                  : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/495px-No-Image-Placeholder.svg.png?20200912122019"
              }
              alt=""
            />
          </div>
          {isLoading ? (
            <Loading />
          ) : (
            <div className="right">
              <div className="form">
                <div className="formInput">
                  <label for="">Image</label>
                  <label for="file">
                    <FileUploadIcon className="icon" />
                  </label>
                  <input
                    id="file"
                    type="file"
                    style={{ display: "none" }}
                    onChange={(e) =>
                      setHinh(URL.createObjectURL(e.target.files[0]))
                    }
                  />
                </div>

                <div className="formInput" key="1">
                  <label>Product name: </label>
                  <input
                    type="text"
                    placeholder="product name"
                    value={tensp}
                    onChange={(e) => setTensp(e.target.value)}
                  />
                </div>
                <div className="formInput" key="2">
                  <label>Product price: </label>
                  <input
                    type="text"
                    placeholder="product name"
                    value={gia}
                    onChange={(e) => setGia(e.target.value)}
                  />
                </div>
                <div className="formInput" key="3">
                  <label>Product information: </label>
                  <textarea
                    type="text"
                    placeholder="product info"
                    value={chitiet}
                    onChange={(e) => setChitiet(e.target.value)}
                  />
                </div>
                <div className="formInput" key="4">
                  <label>Product type: </label>
                  <select
                    value={tenlsp}
                    onChange={(e) => {
                      setTenlsp(getTenLspById(e.target.value));
                      setMalsp(e.target.value);
                    }}
                  >
                    {productTypes.map((type) => (
                      <option value={type.MaLoaiSP}>
                        {type.TenLoaiSanPham}
                      </option>
                    ))}
                  </select>
                </div>

                <button onClick={() => handleAddProduct()}>Send</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewProduct;
