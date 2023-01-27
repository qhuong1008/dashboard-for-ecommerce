import React, { useEffect } from "react";
import "./DataTable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userListSelector } from "../../redux/selectors";
import { loadUserList, deleteUserById } from "../../redux/actions/UserAction";
import Loading from "../../components/Loading/Loading";

const UserDataTable = () => {
  // get links
  let link = "/users/new";
  let infolink = "/users/info";

  const isLoading = useSelector((state) => state.user.loading);

  // get data
  const dispatch = useDispatch();
  const userList = useSelector(userListSelector);
  const userRows = userList;

  const handleDeleteUser = (id) => {
    let text = "Delete user " + id + "?";
    if (window.confirm(text) == true) {
      dispatch(deleteUserById(id))
        .then(alert("Delete successfully!"))
        .then(() => dispatch(loadUserList()))
        .catch((error) => console.log(error));
    }
  };
  useEffect(() => {
    dispatch(loadUserList());
  }, []);
  const userColumn = [
    {
      field: "action",
      headerName: "Actions",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={`${infolink}/${params.row.MaNguoiDung}`}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDeleteUser(params.row.MaNguoiDung)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div style={{ height: 400, width: "100%" }} className="datatable">
      <div className="datatable">
        <div className="datatableTitle">
          <span>User List</span>
          <Link to={link}>
            <button className="addBtn">Add New User</button>
          </Link>
        </div>
      </div>
      {isLoading ? (
        <Loading />
      ) : (
        <DataGrid
          getRowId={(row) => row.MaNguoiDung}
          className="datagrid"
          rows={userRows}
          columns={userColumns.concat(userColumn)}
          pageSize={5}
          rowsPerPageOptions={[10]}
          checkboxSelection
          multiSelect={false}
        />
      )}
    </div>
  );
};

export default UserDataTable;
