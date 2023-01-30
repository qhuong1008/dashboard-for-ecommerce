import React, { useEffect } from "react";
import "./DataTable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { productColumns, productTypeColumns } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  productListSelector,
  productTypeListSelector,
  productsRemainingSelector,
  productTypeRemainingSelector,
} from "../../redux/selectors";
import {
  loadAllProducts,
  getAllProductType,
  deleteProductById,
  deleteProductTypeById,
  filterProduct,
  filterProductType,
} from "../../redux/actions/ProductAction";
import Loading from "../../components/Loading/Loading";
import { ConstructionOutlined } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";

const ProductDataTable = () => {
  // get links
  let link = "/products/new";
  let typelink = "/products/new/type";
  let infolink = "/products/info";

  const isLoading = useSelector((state) => state.product.loading);

  // get data
  const dispatch = useDispatch();
  const productList = useSelector(productsRemainingSelector);
  const productTypes = useSelector(productTypeRemainingSelector);
  console.log(productList);

  const ProductRows = productList;
  const ProductTypeRows = productTypes;
  const handleDeleteProduct = (maSP) => {
    let text = "Delete product " + maSP + "?";
    if (window.confirm(text) == true) {
      dispatch(deleteProductById(maSP))
        .then(alert("Delete product successfully!"))
        .then(() => dispatch(loadAllProducts()))
        .catch((error) => console.log(error));
    }
  };
  const handleDeleteProductType = (malsp) => {
    let text = "Delete product " + malsp + "?";
    if (window.confirm(text) == true) {
      dispatch(deleteProductTypeById(malsp))
        .then(alert("Delete successfully!"))
        .then(() => dispatch(getAllProductType(malsp)))
        .catch((error) => console.log(error));
    }
  };
  const handleProductChange = (searchValue) => {
    dispatch(filterProduct(searchValue));
  };
  const handleProductTypeChange = (searchValue) => {
    dispatch(filterProductType(searchValue));
  };
  useEffect(() => {
    dispatch(loadAllProducts());
    dispatch(getAllProductType());
  }, []);
  const ProductColumn = [
    {
      field: "action",
      headerName: "Actions",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={`${infolink}/${params.row.MaSP}`}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDeleteProduct(params.row.MaSP)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  const ProductTypeColumn = [
    {
      field: "action",
      headerName: "Actions",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={`${infolink}/${params.row.MaLoaiSP}`}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDeleteProductType(params.row.MaLoaiSP)}
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
          <span>Product List</span>
          <div className="search">
            <input
              type="text"
              placeholder="Search..."
              onChange={(e) => {
                handleProductChange(e.target.value);
              }}
            />
            <SearchIcon />
          </div>
          <Link to={link}>
            <button className="addBtn">Add New Product</button>
          </Link>
        </div>
      </div>
      {isLoading ? (
        <Loading />
      ) : (
        <DataGrid
          getRowId={(row) => row.MaSP}
          className="datagrid"
          rows={ProductRows}
          columns={productColumns.concat(ProductColumn)}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection
          multiSelect={false}
        />
      )}
      <div className="datatable">
        <div className="datatableTitle">
          <span>Product Type List</span>
          <div className="search">
            <input
              type="text"
              placeholder="Search..."
              onChange={(e) => handleProductTypeChange(e.target.value)}
            />
            <SearchIcon />
          </div>
          <Link to={typelink}>
            <button className="addBtn">Add New Product Type</button>
          </Link>
        </div>
      </div>
      {isLoading ? (
        <Loading />
      ) : (
        <DataGrid
          getRowId={(row) => row.MaLoaiSP}
          className="datagrid"
          rows={ProductTypeRows}
          columns={productTypeColumns.concat(ProductTypeColumn)}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection
          multiSelect={false}
        />
      )}
    </div>
  );
};

export default ProductDataTable;
