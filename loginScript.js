document.getElementById("loginButton").onclick = function () {
    const userName = document.getElementById("username");
    const passWord = document.getElementById("password");
    window.print(userName, passWord);
    if (userName == "qq" && passWord == "qq") {
        location.replace("HomePage.html");
    } else {
        location.replace("index.html");
    }
}

