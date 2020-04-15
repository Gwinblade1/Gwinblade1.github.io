var elementsMenuLookbook = document.getElementsByClassName("lookbook-filter__item");
var elementSort = document.getElementsByClassName("lookbook-filter__sort-btn");
var selectedLink = document.getElementsByClassName("selected-link");

function firstLoad(){
    if (window.matchMedia("(max-width: 691px)").matches){
        selectedLink[0].innerHTML = '<span><i class="fas fa-check"></i></span>';
    }
    elementsMenuLookbook[0].classList.add("active");
}

function changeActiveLink(){
    for (let value of elementsMenuLookbook){
        value.onclick = function(){
            for (let value of elementsMenuLookbook){
                value.classList.remove("active");
            }
            this.classList.add("active");
        }
    }  
}

function changeHoverLink(){
    var filterMenu = document.getElementsByClassName("lookbook-filter__menu");
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
                    value.onclick = function(){
                        for (let value of selectedLink){
                            value.innerHTML = '';
                            if (value.parentNode === this & window.matchMedia("(max-width: 691px)").matches){
                                value.innerHTML = '<span><i class="fas fa-check"></i></span>';
                            }
                        }
                        for (let value of elementsMenuLookbook){
                            value.classList.remove("active");
                        }
                        this.classList.add("active");
                        filterMenu[0].classList.remove("lookbook-filter__menu--active");
                    }
                }
            }
        }
    
}



function hoverLookbookItem(){
    var elementsLookbookItems = document.getElementsByClassName("lookbook-content__item");

    for (let value of elementsLookbookItems){
        value.onmouseover = function(){
            for(let value of this.getElementsByClassName("lookbook-content__item-inner")){
                value.classList.add("lookbook-content__item-inner--active");
            }
        }
        value.onmouseout = function(){
            for(let value of this.getElementsByClassName("lookbook-content__item-inner")){
                value.classList.remove("lookbook-content__item-inner--active");
            }
        }
    }
}

firstLoad();
changeActiveLink();
hoverLookbookItem();
changeHoverLink();

window.addEventListener('resize', function(event){
    if (window.matchMedia("(min-width: 691px)").matches){
        for (let value of selectedLink){
            value.innerHTML = '';
        }
    }
});

window.addEventListener('resize', function(event){
    if (window.matchMedia("(max-width: 691px)").matches){
        for (var link of elementsMenuLookbook){
            if (link.classList.contains("active")){
                for (let value of selectedLink){
                    if (value.parentNode === link){
                        value.innerHTML = '<span><i class="fas fa-check"></i></span>';
                    }
                }
            }
        }
    }
});