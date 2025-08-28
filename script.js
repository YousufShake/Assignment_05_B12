// Functionalities

//  Heart Icons----->

const countElement = document.getElementById("count");
const heartIcons = document.querySelectorAll(".heart-icon");

let count = 0;

for (let i = 0; i < heartIcons.length; i++){
    heartIcons[i].addEventListener("click", function(){
        count++;
        countElement.innerText= count;
    })
}