const utcTime = document.getElementById("utcTime");

function updateTime() {
    utcTime.innerText = "UTC Time: " + new Date().toUTCString();
}

updateTime();