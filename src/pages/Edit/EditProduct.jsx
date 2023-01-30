import React from "react";
import "./Edit.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Loading from "../../components/Loading/Loading";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  getAllProductType,
  editProduct,
  loadProductById,
} from "../../redux/actions/ProductAction";
import {
  productTypeListSelector,
  productSelector,
} from "../../redux/selectors";

const EditProduct = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const product = useSelector(productSelector);
  const productTypes = useSelector(productTypeListSelector);
  const isLoading = useSelector((state) => state.product.loading);

  const [hinh, setHinh] = useState(product.Hinh);
  const [tensp, setTensp] = useState(product.TenSP);
  const [gia, setGia] = useState(product.Gia);
  const [chitiet, setChitiet] = useState(product.ChiTiet);
  const [tenlsp, setTenlsp] = useState(product.TenLoaiSanPham);
  const [malsp, setMalsp] = useState(product.MaLoaiSP);

  let auth = 0;
  const Authentication = () => {
    if (tensp === "" || gia === "" || chitiet === "" || malsp === "") {
      auth = 1;
    }
  };
  const handleEditProduct = () => {
    Authentication();
    if (auth === 1) {
      alert("Please enter full information!");
    } else {
      product.Hinh = hinh;
      product.TenSP = tensp;
      product.Gia = gia;
      product.ChiTiet = chitiet;
      product.MaLoaiSP = malsp;
      product.TenLoaiSanPham = tenlsp;
      dispatch(editProduct(product))
        .then(() => alert("Edit product successfully!"))
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
    dispatch(loadProductById(params.productId));
  }, []);
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Edit Product</h1>
        </div>

        <div className="bottom">
          <div className="left">
            <img
              src={
                product.Hinh
                  ? product.Hinh
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

                <button onClick={() => handleEditProduct()}>Edit</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
