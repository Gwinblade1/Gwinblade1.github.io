var elementsMenuLookbook = document.getElementsByClassName("lookbook-filter__item");
var elementSort = document.getElementsByClassName("lookbook-filter__sort-btn");
var filterMenu = document.getElementsByClassName("lookbook-filter__menu");

function changeActiveLink(){
    for (let value of elementsMenuLookbook){
        value.onclick = function(){
            for (let value of elementsMenuLookbook){
                value.classList.remove("active");
            }
            this.classList.add("active");
            filterMenu[0].classList.remove("lookbook-filter__menu--active");
        }
    }  
}

function changeHoverLink(){
    for (let value of elementSort){
        value.onclick = function(){
            filterMenu[0].classList.toggle("lookbook-filter__menu--active");
            for (let value of elementsMenuLookbook){
                value.onmouseover = function(){
                    if (window.matchMedia("(max-width: 691px)").matches){
                        for (let value of elementsMenuLookbook){
                            value.classList.remove("active");
                        }
                    }
                }
            }
        }
    }
}

changeActiveLink();
changeHoverLink();