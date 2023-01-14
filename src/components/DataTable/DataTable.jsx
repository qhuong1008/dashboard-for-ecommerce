import React from "react";
import "./DataTable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
const DataTable = () => {
  const userColumn = [
    {
      field: "action",
      headerName: "Actions",
      width: 200,
      renderCell: () => {
        return (
          <div className="cellAction">
            <div className="viewButton">View</div>
            <div className="deleteButton">Delete</div>
          </div>
        );
      },
    },
  ];
  return (
    <div style={{ height: 400, width: "100%" }} className="datatable">
      <DataGrid
        rows={userRows}
        columns={userColumns.concat(userColumn)}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};

export default DataTable;
