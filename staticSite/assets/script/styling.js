const lightButtons = document.getElementsByClassName("lightButton");
const sceneButton = document.getElementsByClassName("sceneButton");
const sceneButtons = document.querySelectorAll(".sceneButton");
const sectionScrollBar = document.getElementsByClassName("group");
const modeButton = document.getElementById("mode");
const modeSpan = document.getElementById("CurrMode");

const sunImage = "<i class='bx bxs-sun'></i>";
const moonImage = "<i class='bx bxs-moon' ></i>";
var mode = 1;


function updateButtonStyle(){
    for (let i = 0;i<lightButtons.length;i++){
        lightButtons[i].addEventListener("click", ()=>{
            lightButtons[i].classList.toggle("buttonOn");
        });
    }
    for (let i = 0;i<sceneButton.length;i++){
        sceneButton[i].addEventListener("click", ()=>{
            sceneButtons.forEach(button => {
                button.classList.remove("buttonOn");
            });
            sceneButton[i].classList.add("buttonOn");
        });
    }
}

function updateScrollBarStyle(){
    for (let i = 0;i<sectionScrollBar.length;i++){
        sectionScrollBar[i].addEventListener("mouseover", ()=>{
            sectionScrollBar[i].classList.add("mouseOn");
        });
        sectionScrollBar[i].addEventListener("mouseout", ()=>{
            sectionScrollBar[i].classList.remove("mouseOn");
        });
    }
}


function updatePageMode()
{
    if(mode)
    {
        modeSpan.innerHTML = moonImage;
    }
    else
    {
        modeSpan.innerHTML = sunImage;
    }
}

modeButton.addEventListener("click", ()=>{
    document.body.classList.toggle("dark");
    mode = (mode) ? 0: 1;
    console.log(mode);
    updatePageMode();
});

updateButtonStyle();
updateScrollBarStyle();
updatePageMode();