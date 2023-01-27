import React from "react";
import "./New.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewUser } from "../../redux/actions/UserAction";

const NewUser = () => {
  const dispatch = useDispatch();
  const [hinh, setHinh] = useState("");
  const [tendangnhap, setTendangnhap] = useState("");
  const [matkhau, setMatkhau] = useState("");
  const [retypeMatkhau, setRetypeMatkhau] = useState("");
  const [hoten, setHoten] = useState("");
  const [ngaysinh, setNgaysinh] = useState("");
  const [diachi, setDiachi] = useState("");

  let auth = 0;
  const Authentication = () => {
    if (
      matkhau === "" ||
      retypeMatkhau === "" ||
      hinh === "" ||
      tendangnhap === "" ||
      hoten === "" ||
      ngaysinh === "" ||
      diachi === ""
    ) {
      auth = 1;
    } else if (matkhau != retypeMatkhau) {
      auth = 2;
    }
  };

  const handleAddUser = () => {
    Authentication();
    if (auth === 1) {
      alert("Please enter full information!");
    } else if (auth === 2) {
      alert("Password and re-entered password do not match!");
    } else {
      let user = {};
      user.hinh = hinh;
      user.hoten = hoten;
      user.tendangnhap = tendangnhap;
      user.matkhau = matkhau;
      user.ngaysinh = ngaysinh;
      user.diachi = diachi;

      dispatch(addNewUser(user))
        .then(() => alert("Add new user successfully!"))
        .catch((error) => alert(error));
    }
  };
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add New User</h1>
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
              <div className="formInput" key="4">
                <label>Retype Password</label>
                <input
                  type="password"
                  value={retypeMatkhau}
                  onChange={(e) => setRetypeMatkhau(e.target.value)}
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

              <button onClick={() => handleAddUser()}>Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewUser;
