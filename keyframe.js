const conainar = document.querySelector(".conainar");
for(let i=0; i<=150; i++){
    const star = document.createElement("div");
    star.className = "star";
    star.style.width = `${Math.random() * 10}px`;
    star.style.height = `${Math.random() * 10}px`;
    star.style.left = `${Math.random() * 100}%`; 
    star.style.top = `${Math.random() * 100}%`;
    star.style.animationDelay = `${Math.random() *5}s`; 
    star.style.animationDirection = `${Math.random() *5+5}s`; 
    conainar.appendChild(star);
}
let btn = document.querySelector(".btn");
let user = document.querySelector(".user");
let pass = document.querySelector(".pass");
btn.addEventListener("click" , function(){
if(user.value === ""){
    window.alert("You are empty");
}
else if (pass.value ===""){
    window.alert("You are pass empty");
}
else if (user.value !=""){
    let username = user.value;
    if (username.includes("@")) {
        // قص الجزء الذي يسبق @
        let nameBeforeAt = username.slice(0, username.indexOf("@"));
        window.alert(`Hello ${nameBeforeAt}`);
    } else {
        window.alert(`Hello ${username}`);
    }}
});
user.addEventListener("click" ,function(){
        document.body.querySelector(".user").style.backgroundColor = "#555";
        document.body.querySelector(".user").style.color = "white";
});
pass.addEventListener("click" ,function(){
    document.body.querySelector(".pass").style.backgroundColor = "#555";
    document.body.querySelector(".pass").style.color = "white";
});
btn.addEventListener("click" , function (){
        document.querySelector(".user").value = "";
        document.querySelector(".pass").value = "";
        document.querySelector(".user").style.backgroundColor = "white";
        document.querySelector(".pass").style.backgroundColor = "white";
});
// user.addEventListener("onblur" ,function(){
// if(user.value ===""){
//     document.querySelector(".user").style.backgroundColor = "white";
// }
// });
let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
setInterval(() => {
    let currentTime = new Date();
    hrs.innerHTML= (currentTime.getHours() < 10 ? "0" : "")
    + currentTime.getHours();
    min.innerHTML = (currentTime.getMinutes() < 10 ? "0" : "")
    + currentTime.getMinutes();
    sec.innerHTML = (currentTime.getSeconds() < 10 ? "0" :"")
    + currentTime.getSeconds();
},1000);

