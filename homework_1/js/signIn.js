function register() {
    var u_user1 = document.getElementById("u_name1").value;
    var u_password1 = document.getElementById("u_password1").value;
    var u_password2 = document.getElementById("u_password2").value;
    if ((u_user1 === "root") && (u_password1 === "123456") && (u_password2 === u_password1)) {
        alert("注册成功！返回登录页面！")
        location.href = "login.html";
    } else {
        alert("注册失败，请检查注册信息！");
        location.reload();

    }

}