console.log("this is js file");
const navright = document.querySelector(".navright");
const openmenu = document.querySelector(".openmenu");
const closemenu = document.querySelector(".closemenu");

openmenu.addEventListener("click", show);
closemenu.addEventListener("click", close);

function show(){
    navright.style.display = "flex";
    navright.style.top = "0"
}

function close(){
    navright.style.top = "-55%"
}