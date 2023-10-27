//load trang để lấy số id của trang từ đó tạo item tương ứng
window.onload = function () {
  //lấy id khi load trang
  const urlParams = new URLSearchParams(window.location.search);
  const myParam = urlParams.get("productid");
  console.log("params", myParam);
  //tạo item từ data sever
  getDataApi();
  //tạo item dựa trên id lấy được
  loadDataAPI(myParam);
};
