import React from "react";
import "./New.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import FileUploadIcon from "@mui/icons-material/FileUpload";
const New = () => {
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
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/495px-No-Image-Placeholder.svg.png?20200912122019"
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label for="">Image:</label>
                <label for="file">
                  <FileUploadIcon className="icon" />
                </label>
                <input id="file" type="file" style={{ display: "none" }} />
              </div>
              <div className="formInput">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="alissa_violet"
                  name=""
                  value=""
                />
              </div>
              <div className="formInput">
                <label>Name and surname</label>
                <input
                  type="text"
                  placeholder="alissa_violet"
                  name=""
                  value=""
                />
              </div>
              <div className="formInput">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="alissa123@gmail.com"
                  name=""
                  value=""
                />
              </div>
              <div className="formInput">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="+1 234 567 89"
                  name=""
                  value=""
                />
              </div>
              <div className="formInput">
                <label>Password</label>
                <input type="password" name="" value="" />
              </div>
              <div className="formInput">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="1st DC New York"
                  name=""
                  value=""
                />
              </div>
              <div className="formInput">
                <label>Country</label>
                <input type="text" placeholder="USA" name="" value="" />
              </div>
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
