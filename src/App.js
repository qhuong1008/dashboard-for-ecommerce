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

function App() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List listType="User" />} />
              <Route path="info/:userId" element={<SingleUser />} />
              <Route path="new" element={<NewUser />} />
            </Route>
            <Route path="products">
              <Route index element={<List listType="Product" />} />
              <Route path="info/:productId" element={<SingleProduct />} />
              <Route path="new" element={<NewProduct />} />
              <Route path="new/type" element={<NewProductType />} />
            </Route>
            <Route path="orders">
              <Route index element={<List listType="Order" />} />
              <Route path="info/:orderId" element={<SingleOrder />} />
            </Route>
          </Route>
          <Route path="/loading" element={<Loading />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
