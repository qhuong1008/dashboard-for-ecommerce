import React, { useEffect } from "react";
import "./Widget.scss";
import KeyboardControlKeyIcon from "@mui/icons-material/KeyboardControlKey";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import PaidIcon from "@mui/icons-material/Paid";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import {
  userListSelector,
  productListSelector,
  orderListSelector,
} from "../../redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import { loadUserList } from "../../redux/actions/UserAction";
import { loadOrderList } from "../../redux/actions/OrderAction";
import { loadAllProducts } from "../../redux/actions/ProductAction";
import { Link } from "react-router-dom";

const Widget = ({ type }) => {
  const dispatch = useDispatch();
  const zuserList = useSelector(userListSelector);
  const zproductList = useSelector(productListSelector);
  const zorderList = useSelector(orderListSelector);

  let userList = zuserList.filter((user) => {
    return user.DaXoa === false;
  });
  let orderList = zorderList.filter((order) => {
    return order.DaXoa === false;
  });
  let productList = zproductList.filter((product) => {
    return product.DaXoa === false;
  });

  let data;
  // temporary
  let amount = 100;
  const difference = 20;

  useEffect(() => {
    dispatch(loadUserList());
    dispatch(loadOrderList());
    dispatch(loadAllProducts());
  }, []);
  switch (type) {
    case "user":
      amount = userList.length;
      data = {
        title: "USERS",
        isMoney: false,
        linkTitle: "See all users",
        link: "/users",
        icon: (
          <PersonOutlineIcon
            className="icon"
            style={{ color: "crimson", backgroundColor: "rgba(255,0,0,0.2)" }}
          />
        ),
      };
      break;
    case "order":
      amount = orderList.length;
      data = {
        title: "ORDERS",
        isMoney: false,
        linkTitle: "View all orders",
        link: "/orders",
        icon: (
          <ShoppingCartCheckoutIcon
            className="icon"
            style={{
              color: "goldenrod",
              backgroundColor: "rgba(218,165,32,0.2)",
            }}
          />
        ),
      };
      break;
    case "product":
      amount = productList.length;
      data = {
        title: "PRODUCTS",
        isMoney: false,
        linkTitle: "View all products",
        link: "/products",
        icon: (
          <PaidIcon
            className="icon"
            style={{ color: "green", backgroundColor: "rgba(0,128,0,0.2)" }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        linkTitle: "See details",
        link: "/",
        icon: (
          <AccountBalanceWalletIcon
            className="icon"
            style={{ color: "purple", backgroundColor: "rgba(128,0,128,0.2)" }}
          />
        ),
      };
      break;
    default:
      break;
  }
  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"} {amount}
        </span>
        <Link to={data.link}>
          <span className="link">{data.linkTitle}</span>
        </Link>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardControlKeyIcon />
          {difference}%
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
