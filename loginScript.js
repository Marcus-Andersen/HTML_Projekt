function logintrial() {
    const userName = document.getElementById("username").value;
    const passWord = document.getElementById("password").value;
    if (userName == "qq" && passWord == "qq") {
        location.replace("HomePage.html");
    } else {
        location.replace("index.html");
    }
}

