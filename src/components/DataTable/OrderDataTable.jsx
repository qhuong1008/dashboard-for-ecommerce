import React, { useEffect } from "react";
import "./DataTable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { orderColumns } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  orderListSelector,
  ordersRemainingSelector,
} from "../../redux/selectors";
import { loadOrderList, FilterOrder } from "../../redux/actions/OrderAction";
import Loading from "../../components/Loading/Loading";
import SearchIcon from "@mui/icons-material/Search";

const OrderDataTable = () => {
  // get links
  let link = "/orders/new";
  let infolink = "/orders/info";

  const isLoading = useSelector((state) => state.order.loading);

  const handleOrderChange = (searchValue) => {
    dispatch(FilterOrder(searchValue));
  };
  // get data
  const dispatch = useDispatch();
  const orderList = useSelector(ordersRemainingSelector);
  const orderRows = orderList;
  useEffect(() => {
    dispatch(loadOrderList());
  }, []);
  const orderColumn = [
    {
      field: "action",
      headerName: "Actions",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={`${infolink}/${params.row.MaHoaDon}`}>
              <div className="viewButton">View</div>
            </Link>
            <div className="deleteButton">Delete</div>
          </div>
        );
      },
    },
  ];

  return (
    <div style={{ height: 400, width: "100%" }} className="datatable">
      <div className="datatable">
        <div className="datatableTitle">
          <span>Order List</span>
          <div className="search">
            <input
              type="text"
              placeholder="Search..."
              onChange={(e) => handleOrderChange(e.target.value)}
            />
            <SearchIcon />
          </div>
        </div>
      </div>
      {isLoading ? (
        <Loading />
      ) : (
        <DataGrid
          getRowId={(row) => row.MaHoaDon}
          className="datagrid"
          rows={orderRows}
          columns={orderColumns.concat(orderColumn)}
          pageSize={5}
          rowsPerPageOptions={[10]}
          checkboxSelection
          multiSelect={false}
        />
      )}
    </div>
  );
};

export default OrderDataTable;
