import React, { useEffect } from "react";
import "./Edit.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewUser, loadUserById } from "../../redux/actions/UserAction";
import { useParams } from "react-router-dom";
import { userSelector } from "../../redux/selectors";
import Loading from "../../components/Loading/Loading";
import { userRows } from "../../datatablesource";
import { ConstructionOutlined } from "@mui/icons-material";
import { editUser } from "../../redux/actions/UserAction";

const EditUser = () => {
  const params = useParams();
  const dispatch = useDispatch();
  let user = useSelector(userSelector);
  let isLoading = useSelector((state) => state.user.loading);

  const [hinh, setHinh] = useState(user.Hinh);
  const [tendangnhap, setTendangnhap] = useState(user.TenDangNhap);
  const [matkhau, setMatkhau] = useState(user.MatKhau);
  const [retypeMatkhau, setRetypeMatkhau] = useState("");
  const [hoten, setHoten] = useState(user.HoTen);
  const [ngaysinh, setNgaysinh] = useState(user.NgaySinh.substring(0, 10));
  const [diachi, setDiachi] = useState(user.DiaChi);

  let auth = 0;
  const Authentication = () => {
    if (
      matkhau === "" ||
      hinh === "" ||
      tendangnhap === "" ||
      hoten === "" ||
      ngaysinh === "" ||
      diachi === ""
    ) {
      auth = 1;
    }
  };

  const handleEditUser = () => {
    Authentication();
    if (auth === 1) {
      alert("Please enter full information!");
    } else {
      user.Hinh = hinh;
      user.HoTen = hoten;
      user.TenDangNhap = tendangnhap;
      user.MatKhau = matkhau;
      user.NgaySinh = ngaysinh;
      user.DiaChi = diachi;
      dispatch(editUser(user))
        .then(() => alert("Edit user successfully!"))
        .catch((error) => alert(error));
    }
  };

  useEffect(() => {
    dispatch(loadUserById(params.userId));
  }, []);
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Edit User</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                user.Hinh
                  ? user.Hinh
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
                  <label>Username</label>
                  <input
                    type="text"
                    placeholder="johndoe123"
                    value={tendangnhap}
                    onChange={(e) => setTendangnhap(e.target.value)}
                  />
                </div>
                <div className="formInput" key="2">
                  <label>Full name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    value={hoten}
                    onChange={(e) => setHoten(e.target.value)}
                  />
                </div>
                <div className="formInput" key="3">
                  <label>Password</label>
                  <input
                    type="password"
                    value={matkhau}
                    onChange={(e) => setMatkhau(e.target.value)}
                  />
                </div>

                <div className="formInput" key="5">
                  <label>Date of birth</label>
                  <input
                    type="date"
                    value={ngaysinh}
                    onChange={(e) => setNgaysinh(e.target.value)}
                  />
                </div>
                <div className="formInput" key="6">
                  <label>Address</label>
                  <input
                    type="text"
                    placeholder="New York"
                    value={diachi}
                    onChange={(e) => setDiachi(e.target.value)}
                  />
                </div>

                <button onClick={() => handleEditUser()}>Edit</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EditUser;
