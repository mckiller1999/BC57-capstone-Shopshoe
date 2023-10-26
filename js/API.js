/*----------------------index----------------------*/

function getDataApi() {
  var promise = axios({
    url: "https://shop.cyberlearn.vn/api/Product",
    method: "GET",
    responseType: "json",
  });
  promise.then(function (res) {
    //console.log(res.data.content);
    createItem(res.data.content);
  });
  promise.catch(function (err) {
    console.log(err);
  });
}

/*----------------------detail----------------------*/
function loadDataAPI(idParam) {
  var promise = axios({
    url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${idParam} `,
    method: "GET",
    responseType: "json",
  });
  promise.then(function (res) {
    //console.log(res.data.content);
    createFormItems(res.data.content);
    sizeItem(res.data.content.size);
  });
  promise.catch(function (err) {
    console.log(err);
  });
}

/*----------------------register----------------------*/
function getDataRes(DataUser, idForm, alertEmail) {
  var promise = axios({
    url: "https://shop.cyberlearn.vn/api/Users/signup",
    method: "POST",
    data: DataUser,
  });
  promise.then(function (res) {
    //console.log(res.data);
    alert("tạo tk thành công");
    document.querySelector(idForm).reset();
  });
  promise.catch(function (err) {
    console.log(err.response.status);
    var statusErr = err.response.status;
    if (statusErr === 400) {
      alertEmail.innerHTML =
        "email này đã được sử dụng, vui lòng nhập email khác";
      alertEmail.style.display = "block";
    }
  });
}
