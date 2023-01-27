export const userColumns = [
  { field: "MaNguoiDung", headerName: "ID", width: 70 },
  {
    field: "TenDangNhap",
    headerName: "Username",
    width: 180,
  },
  {
    field: "HoTen",
    headerName: "Fullname",
    width: 180,
  },

  {
    field: "NgaySinh",
    headerName: "Date of birth",
    width: 150,
  },
  {
    field: "DiaChi",
    headerName: "Address",
    width: 180,
  },
  {
    field: "DaXoa",
    headerName: "Deleted",
    width: 120,
  },
];
export const productColumns = [
  {
    field: "MaSP",
    headerName: "Product Id",
    width: 70,
  },
  {
    field: "TenSP",
    headerName: "Product Name",
    width: 120,
  },
  {
    field: "Gia",
    headerName: "Price",
    width: 120,
  },
  {
    field: "ChiTiet",
    headerName: "Info",
    width: 120,
  },
  {
    field: "Hinh",
    headerName: "Image",
    width: 120,
  },
  {
    field: "TenLoaiSanPham",
    headerName: "Product Type",
    width: 120,
  },
  {
    field: "DaXoa",
    headerName: "Deleted",
    width: 120,
  },
];

export const productTypeColumns = [
  {
    field: "MaLoaiSP",
    headerName: "Product Type Id",
    width: 200,
  },
  {
    field: "TenLoaiSanPham",
    headerName: "Product Name",
    width: 300,
  },
  {
    field: "DaXoa",
    headerName: "Deleted",
    width: 120,
  },
];

export const orderColumns = [
  {
    field: "MaHoaDon",
    headerName: "Order Id",
    width: 70,
  },
  {
    field: "HoTen",
    headerName: "Client Name",
    width: 120,
  },
  {
    field: "MaKhachHang",
    headerName: "Client Id",
    width: 120,
  },
  {
    field: "TongThanhToan",
    headerName: "Total Bill",
    width: 120,
  },
  {
    field: "DiaChiGiaoHang",
    headerName: "Address",
    width: 120,
  },
  {
    field: "SoDienThoai",
    headerName: "Phone",
    width: 120,
  },
  {
    field: "ThoiGianGiaoHang",
    headerName: "Delivery Time",
    width: 120,
  },
  {
    field: "TrangThaiGiaoHang",
    headerName: "Delivery Status",
    width: 120,
  },
  {
    field: "TrangThaiDonHang",
    headerName: "Order Status",
    width: 120,
  },
  {
    field: "TrangThaiThanhToan",
    headerName: "Payment Status",
    width: 120,
  },
];

//temporary data
export const userRows = [
  {
    id: 1,
    username: "Snow",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    email: "1snow@gmail.com",
    age: 35,
  },
  {
    id: 2,
    username: "Jamie Lannister",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "2snow@gmail.com",
    status: "passive",
    age: 42,
  },
  {
    id: 3,
    username: "Lannister",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "3snow@gmail.com",
    status: "pending",
    age: 45,
  },
  {
    id: 4,
    username: "Stark",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "4snow@gmail.com",
    status: "active",
    age: 16,
  },
  {
    id: 5,
    username: "Targaryen",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "5snow@gmail.com",
    status: "passive",
    age: 22,
  },
  {
    id: 6,
    username: "Melisandre",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "6snow@gmail.com",
    status: "active",
    age: 15,
  },
  {
    id: 7,
    username: "Clifford",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "7snow@gmail.com",
    status: "passive",
    age: 44,
  },
  {
    id: 8,
    username: "Frances",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "8snow@gmail.com",
    status: "active",
    age: 36,
  },
  {
    id: 9,
    username: "Roxie",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    status: "pending",
    age: 65,
  },
  {
    id: 10,
    username: "Roxie",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    status: "active",
    age: 65,
  },
];

// MUC THAM KHAO
// export const userColumns = [
//   { field: "MaNguoiDung", headerName: "ID", width: 70 },
//   {
//     field: "TenDangNhap",
//     headerName: "Username",
//     width: 180,
//     renderCell: (params) => {
//       return (
//         <div className="cellWithImg">
//           <img className="cellImg" src={params.row.img} alt="avatar" />
//           {params.row.username}
//         </div>
//       );
//     },
//   },
