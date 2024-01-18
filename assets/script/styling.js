const lightButtons = document.getElementsByClassName("lightButton");
const sceneButton = document.getElementsByClassName("sceneButton");
const sceneButtons = document.querySelectorAll(".sceneButton");
const sectionScrollBar = document.getElementsByClassName("group");


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

updateButtonStyle();
updateScrollBarStyle();