function login() {
    const u_user = document.getElementById("u_name").value;
    const u_password = document.getElementById("u_password").value;
    if((u_user === "admin") && (u_password === "admin888")) {
        alert("登录成功！开始看片吧！");
        location.href='main.html'
    } else {
        alert("用户名或者密码错误，登录失败\n请检查登录信息！");
        location.reload();
    }
}