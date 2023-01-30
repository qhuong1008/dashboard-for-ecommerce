import { createSelector } from "reselect";

export const userListSelector = (state) => state.user.userList;
export const userSelector = (state) => state.user.user;
export const userFilterSelector = (state) => state.user.userFilter;
export const productListSelector = (state) => state.product.productList;
export const productSelector = (state) => state.product.product;
export const productFilterSelector = (state) => state.product.filterProduct;
export const productTypeListSelector = (state) => state.product.productTypes;
export const productTypeFilterSelector = (state) =>
  state.product.filterProductType;
export const orderListSelector = (state) => state.order.orderList;
export const orderSelector = (state) => state.order.order;
export const ordersFitlerSelector = (state) => state.order.orderFilter;

export const productsRemainingSelector = createSelector(
  productListSelector,
  productFilterSelector,
  (productList, filterSearch) => {
    return productList.filter((product) => {
      return (
        (product &&
          product.TenSP.toLowerCase().includes(filterSearch.toLowerCase())) ||
        product.MaSP.toLowerCase().includes(filterSearch.toLowerCase()) ||
        product.Gia.toString()
          .toLowerCase()
          .includes(filterSearch.toLowerCase()) ||
        product.ChiTiet.toLowerCase().includes(filterSearch.toLowerCase()) ||
        product.TenLoaiSanPham.toLowerCase().includes(
          filterSearch.toLowerCase()
        ) ||
        product.MaLoaiSP.toLowerCase().includes(filterSearch.toLowerCase()) ||
        product.DaXoa.toString()
          .toLowerCase()
          .includes(filterSearch.toLowerCase())
      );
    });
  }
);
export const productTypeRemainingSelector = createSelector(
  productTypeListSelector,
  productTypeFilterSelector,
  (typelist, typefilter) => {
    return typelist.filter((type) => {
      return (
        (type &&
          type.MaLoaiSP.toLowerCase().includes(typefilter.toLowerCase())) ||
        type.TenLoaiSanPham.toLowerCase().includes(typefilter.toLowerCase()) ||
        type.DaXoa.toString().toLowerCase().includes(typefilter.toLowerCase())
      );
    });
  }
);
export const usersRemainingSelector = createSelector(
  userListSelector,
  userFilterSelector,
  (userList, userFilter) => {
    return userList.filter((user) => {
      return (
        (user &&
          user.MaNguoiDung.toLowerCase().includes(userFilter.toLowerCase())) ||
        user.TenDangNhap.toLowerCase().includes(userFilter.toLowerCase()) ||
        user.HoTen.toLowerCase().includes(userFilter.toLowerCase()) ||
        user.NgaySinh.toString()
          .toLowerCase()
          .includes(userFilter.toLowerCase()) ||
        user.DiaChi.toLowerCase().includes(userFilter.toLowerCase()) ||
        user.RoleID.toLowerCase().includes(userFilter.toLowerCase()) ||
        user.DaXoa.toString()
          .toLowerCase()
          .includes(userFilter.toLowerCase()) ||
        user.Hinh.toLowerCase().includes(userFilter.toLowerCase())
      );
    });
  }
);

export const ordersRemainingSelector = createSelector(
  orderListSelector,
  ordersFitlerSelector,
  (orderList, ordersFilter) => {
    return orderList.filter((order) => {
      return (
        (order &&
          order.MaHoaDon.toString()
            .toLowerCase()
            .includes(ordersFilter.toLowerCase())) ||
        order.GhiChu.toString()
          .toLowerCase()
          .includes(ordersFilter.toLowerCase()) ||
        order.TongThanhToan.toString()
          .toLowerCase()
          .includes(ordersFilter.toLowerCase()) ||
        order.HoTen.toLowerCase().includes(ordersFilter.toLowerCase()) ||
        order.DiaChiGiaoHang.toLowerCase().includes(
          ordersFilter.toLowerCase()
        ) ||
        order.SoDienThoai.toLowerCase().includes(ordersFilter.toLowerCase()) ||
        order.MaKhachHang.toLowerCase().includes(ordersFilter.toLowerCase()) ||
        order.ThoiGianGiaoHang.toString()
          .toLowerCase()
          .includes(ordersFilter.toLowerCase()) ||
        order.TrangThaiDonHang.toString()
          .toLowerCase()
          .includes(ordersFilter.toLowerCase()) ||
        order.TrangThaiGiaoHang.toString()
          .toLowerCase()
          .includes(ordersFilter.toLowerCase()) ||
        order.TrangThaiThanhToan.toString()
          .toLowerCase()
          .includes(ordersFilter.toLowerCase()) ||
        order.DaXoa.toString()
          .toLowerCase()
          .includes(ordersFilter.toLowerCase())
      );
    });
  }
);
