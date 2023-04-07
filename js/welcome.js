const welcome = document.querySelector("#welcome");
const date = new Date();
const nowTime = String(date.getHours());

if (6<=nowTime && nowTime < 12){
    welcome.innerText = "Good morning"
} else if (12<=nowTime && nowTime < 18){
    welcome.innerText = "Good afternoon"
} else if (18<=nowTime && nowTime < 21){
    welcome.innerText = "Good evening"
} else if (21<=nowTime && nowTime < 24){
    welcome.innerText = "Good night"
} else if (0<=nowTime && nowTime < 6){
    welcome.innerText = "Good night"
}