function defaultLoad(){
    let elementsMenuLookbook = document.getElementsByClassName("lookbook-filter__item");
    let elementSort = document.getElementsByClassName("lookbook-filter__sort-btn");
    let filterMenu = document.querySelector(".lookbook-filter__menu");
    changeActiveLink(elementsMenuLookbook, filterMenu);
    sortBtn(elementSort, filterMenu);
}
function changeActiveLink(elementsMenuLookbook, filterMenu){
    for (let value of elementsMenuLookbook){
        value.onclick = function(){
            for (let elem of elementsMenuLookbook){
                elem.classList.remove("active");
            }
            value.classList.add("active");
            filterMenu.classList.remove("lookbook-filter__menu--active");
        }
    }  
}
function sortBtn(elementSort, filterMenu){
    for (let value of elementSort){
        value.onclick = function(){
            filterMenu.classList.toggle("lookbook-filter__menu--active");
        }
    }
}

function bannerModalWindow(event){
    if (window.matchMedia("(max-width: 966px)").matches){
        let bannerWin = document.querySelector(".lookbook-content__banner-win");
        let bannerWinTextWrapper = bannerWin.querySelector(".banner-win__text-wrapper");
        toggleModalWindow(event, bannerWin, bannerWinTextWrapper, '.lookbook-content__banner-win',
        '.banner-win__text-wrapper', 'banner-win__text-wrapper--active');
    }
    if (window.matchMedia("(max-width: 768px)").matches){
        let bannerJane = document.querySelector(".lookbook-content__banner-janes");
        let bannerJaneTextWrapper = bannerJane.querySelector(".banner-janes__text-wrapper");
        toggleModalWindow(event, bannerJane, bannerJaneTextWrapper, '.lookbook-content__banner-janes',
        '.banner-janes__text-wrapper', 'banner-janes__text-wrapper--active');
    }
}
function toggleModalWindow(event, banner, wrapper, bannerClass, wrapperClass, activeClass){
    if (event.target.closest(bannerClass) && !wrapper.classList.contains(activeClass)){
        wrapper.classList.add(activeClass);
        banner.style.cssText = `height: ${wrapper.offsetHeight}px; padding: 0;`;
    }
    else if (!event.target.closest(wrapperClass) && wrapper.classList.contains(activeClass)){
        wrapper.classList.remove(activeClass);
        banner.removeAttribute("style");
    }
}
window.addEventListener('click', () => {bannerModalWindow(event);}, false);

defaultLoad();

