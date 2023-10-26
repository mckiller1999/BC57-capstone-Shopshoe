document.querySelector("#submit").onclick = function(a) {
    a.preventDefault();
    /*-------------------lấy data user------------------ */

    //set true false khi chọn giới tính
    var gender = document.querySelector("#nam");
    if (gender.checked) {
        gender = true;
    } else {
        gender = false;
    }

    //lấy value của ô passcf
    var passwordCF = document.querySelector("#password-confirm").value;

    //lấy data dựa trên input người dùng nhập
    var user = new User();
    user.email = document.querySelector("#email").value;
    user.password = document.querySelector("#password").value;
    user.name = document.querySelector("#name").value;
    user.gender = gender;
    user.phone = document.querySelector("#phone").value;

    //set sự kiện validation
    var val = true;
    val = valNull(user.email.trim(), "#email-alert", "email ");
    valNull(user.password.trim(), "#password-alert", "password ");
    valNull(passwordCF, "#confirm-alert", "password ");
    valNull(user.name.trim(), "#name-alert", "tên ");
    valNull(user.phone.trim(), "#phone-alert", "số điện thoại ");

    val =
        val &
        checkEmail(user.email, "#email-alert2") &
        checkPass(user.password, "#password-alert2") &
        passCF(user.password, passwordCF, "#confirm-alert2") &
        checkVal(user.name, "#name-alert2") &
        checkNum(user.phone, "#phone-alert2", "số điện thoại", 10);
    if (val != true) {
        return;
    } else {
        console.log(user);
        var emailAl = document.querySelector("#email-alert");
        getDataRes(user, "#formBody", emailAl);
    }
};

document.querySelector(".op-eyes").onclick = function() {
    changeVal("#password");
    changeVal("#password-confirm");
};