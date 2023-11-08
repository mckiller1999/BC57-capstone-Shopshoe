/*----------------------index----------------------*/

function createItem(arrItem) {
  var output = "";
  for (var i = 0; i < 9; i++) {
    var item = arrItem[i];
    output += `
      <div id=${item.id} class="item col-lg-4 col-md-6 col-sm-12" >
            <div class="card item-content " >
                <img src=${item.image} class="card-img-top" alt="img-item">
                <div class="card-body">
                    <div class="item-title">
                        <h5 class="card-title">${item.name}</h5>
                        <p class="card-des mb-2">${item.description.substring(
                          0,
                          40
                        )}...</p>
                    </div>
                    <div class="item-star text-warning mb-3">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                    </div>
                    <div class="item-info">
                        <div class="item-price">${item.price}$</div>
                        <a href="./detail.html?productid=${
                          item.id
                        }" ><button class="btn btn-warning">Buy Now</button></a>
                    </div>
                </div>
            </div>
        </div>
      `;
  }

  document.querySelector("#productItem").innerHTML = output;
  return output;
}

/*----------------------detail----------------------*/

function createFormItems(data) {
  var output = "";

  var output = `<div class="img-item w-50" >
      <img src=${data.image}  alt="item-image" />
    </div>
    <div class="product-content">
            <h2>${data.name}</h2>
            <p class = 'item-description'>
              ${data.description}
            </p>
            <a class='show1'>Show more</a>
            <h3>Available Size</h3>
            <div id="size-item">;
  </div>
  <a class='show2'>Show more</a>
            <h3 id="price" class='mt-2'>${data.price}$</h3>
            <div class="select-value">
              <input class="btn btn-primary" type="button" id='add' value="+" />
              <span id='vl-item' class='mx-2'>1</span>
              <input class="btn btn-primary" type="button" id='remove' value="-" />
            </div>
            <div id="btn-buy">
              <button class="btn btn-primary" id="success-${data.id}">ADD TO CART</button>
            </div>
          </div>
    `;

  document.querySelector("#item-content").innerHTML = output;
  //tạo input size
  sizeItem(data.size);
  getSize(data.size);
  //console.log(getSize(data.size));

  document.querySelector(".show1").onclick = function () {
    var info = document.querySelector(".item-description");
    if (info.style.height === "80px") {
      info.style.removeProperty("overflow");
      info.style.height = "100%";
    } else {
      info.style.height = "80px";
      info.style.overflow = "hidden";
    }
  };
  document.querySelector(".show2").onclick = function () {
    var info = document.querySelector("#size-item");
    if (info.style.height === "50px") {
      info.style.removeProperty("overflow");
      info.style.height = "100%";
    } else {
      info.style.height = "50px";
      info.style.overflow = "hidden";
    }
  };

  //set sự kiện btn tăng giảm item
  document.querySelector("#add").onclick = function () {
    var vl = +document.querySelector("#vl-item").innerHTML;

    vl++;

    document.querySelector("#vl-item").innerHTML = vl;
  };
  document.querySelector("#remove").onclick = function () {
    var vl = +document.querySelector("#vl-item").innerHTML;
    vl--;
    if (vl === 0) {
      return;
    }

    document.querySelector("#vl-item").innerHTML = vl;
  };

  //lấy data item khi nhấn buy
  document.querySelector(`#success-${data.id}`).onclick = function () {
    //lấy value size khi nhấn chọn

    var name = data.name;
    var price = data.price;
    var valItem = +document.querySelector("#vl-item").innerHTML;
    var total = valItem * price;

    console.log(
      "name:",
      name,
      "quantity:",
      valItem,
      "price:",
      total + "$",
      "size:",
      getSize(data.size)
    );
  };

  return output;
}

//tạo btn các size có trong data
function sizeItem(arrSize) {
  var output = "";
  for (var i = 0; i < arrSize.length; i++) {
    output += `<input type="radio" class="btn-check " name="options-outlined" id="success-outlined${i}" value=${arrSize[i]}  >
    <label class="btn btn-outline-primary my-2" for="success-outlined${i}">${arrSize[i]}</label>
    `;
  }

  //console.log(output);
  document.querySelector("#size-item").innerHTML = output;

  return output;
}

// lấy value khi nhấn size
function getSize(arrSize) {
  for (var i = 0; i < arrSize.length; i++) {
    var res = 0;
    (function (j) {
      var vl = document.querySelector(`#success-outlined${j}`);

      vl.addEventListener("click", function () {
        vl.classList.add("active");
        res = +vl.value;
        console.log("size:", res);
        return res;
      });
    })(i);
  }
}

/*----------------------res ---------------------- */
//đổi giá trị pass thành text và ngược lại
function changeVal(id) {
  var passwordInput = document.querySelector(id).type;

  if (passwordInput === "password") {
    passwordInput = "text";
  } else {
    passwordInput = "password";
  }
  document.querySelector(id).type = passwordInput;
}
