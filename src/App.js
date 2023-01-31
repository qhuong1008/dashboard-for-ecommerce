import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import List from "./pages/List/List";
import SingleUser from "./pages/Single/SingleUser";
import SingleProduct from "./pages/Single/SingleProduct";
import SingleOrder from "./pages/Single/SingleOrder";
import NewUser from "./pages/New/NewUser";
import NewProduct from "./pages/New/NewProduct";
import NewProductType from "./pages/New/NewProductType";
import Loading from "./components/Loading/Loading";
import { userInputs, productInputs } from "./formSource";
import "./style/dark.scss";
import { useState, useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import EditUser from "./pages/Edit/EditUser";
import EditProduct from "./pages/Edit/EditProduct";
import EditOrder from "./pages/Edit/EditOrder";
import Profile from "./pages/Profile/Profile";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="/homepage" index element={<Home />} />
            <Route path="" index element={<Home />} />
            <Route path="/profile" index element={<Profile />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List listType="User" />} />
              <Route path="info/:userId" element={<SingleUser />} />
              <Route path="new" element={<NewUser />} />
              <Route path="edit/:userId" element={<EditUser />} />
            </Route>
            <Route path="products">
              <Route index element={<List listType="Product" />} />
              <Route path="info/:productId" element={<SingleProduct />} />
              <Route path="new" element={<NewProduct />} />
              <Route path="new/type" element={<NewProductType />} />
              <Route path="edit/:productId" element={<EditProduct />} />
            </Route>
            <Route path="orders">
              <Route index element={<List listType="Order" />} />
              <Route path="info/:orderId" element={<SingleOrder />} />
              <Route path="edit/:orderId" element={<EditOrder />} />
            </Route>
          </Route>
          <Route path="/loading" element={<Loading />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
