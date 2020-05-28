$( function(){
    $('.slider-img').slick({
        prevArrow: $('.prev'),
        nextArrow: $('.next')
    });
    $('.menu-list').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.slider-info',
        arrows: false,
        focusOnSelect: true
    });
    $('.slider-info').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.menu-list'
    });
});

function selectColor(){
    let selectColorBox = document.querySelector(".select-color");
    let selectColorInput = selectColorBox.getElementsByClassName("select-color__input");
    let selectColorList = selectColorBox.getElementsByClassName("color-list");
    let selectColorListItems = selectColorList[0].getElementsByClassName("color-list__item");
    combobox(selectColorBox, selectColorInput, selectColorList, selectColorListItems);
}
function selectSize(){
    let selectSizeBox = document.querySelector(".select-size");
    let selectSizeInput = selectSizeBox.getElementsByClassName("select-size__input");
    let selectSizeList = selectSizeBox.getElementsByClassName("size-list");
    let selectSizeListItems = selectSizeList[0].getElementsByClassName("size-list__item");
    combobox(selectSizeBox, selectSizeInput, selectSizeList, selectSizeListItems);
}

function combobox(box, input, list, listItems){
    list = Array.from(list);
    listItems = Array.from(listItems);
    input = Array.from(input);
    box.onclick = () => {
        list.forEach(elem => {elem.classList.toggle("select-list--active");});
    }
    for (let item of listItems){
        item.onclick = () => {
            listItems.forEach(elem => {elem.classList.remove("select-list__item--active");});
            item.classList.add("select-list__item--active");
            input.forEach(elem => {elem.value = item.textContent.match(/\w+/g).join(' ');}); 
        }
    }
}

function customInputTypeNumber(){
    let inputTypeNumber = document.querySelector(".select-qty__input");
    let arrowUp = document.querySelector(".qty-inner__arrow-up");
    let arrowDown = document.querySelector(".qty-inner__arrow-down");
    customInputTypeNumberCorrectValue(inputTypeNumber, arrowUp, arrowDown);
    customInputTypeNumberArrows(inputTypeNumber, arrowUp, arrowDown);
    inputTypeNumber.onfocus = () => {
        inputTypeNumber.value = '';
    }
    inputTypeNumber.onblur = () => {
        customInputTypeNumberCorrectValue(inputTypeNumber, arrowUp, arrowDown);
    }
}
function customInputTypeNumberCorrectValue(input, arrowUp, arrowDown){
    if (input.value === '' || Number(input.value) <= 1){
        input.value = '1';
        deactivationArrow(arrowDown, arrowUp);
    }
    else if (Number(input.value) >= 10){
        input.value = '10';
        deactivationArrow(arrowUp, arrowDown);
    }
}
function customInputTypeNumberArrows(input, arrowUp, arrowDown){
    arrowUp.onclick = () => {
        if (Number(input.value) >= 9)
            deactivationArrow(arrowUp, arrowDown);
        if (Number(input.value) < 10){
            input.value = (Number(input.value) + 1) + '';
            if (arrowDown.classList.contains("arrow--inactive")){
                arrowDown.classList.remove("arrow--inactive");
            }
        }
    }
    arrowDown.onclick = () => {
        if (Number(input.value) <= 2)
            deactivationArrow(arrowDown, arrowUp);
        if (Number(input.value) > 1){
            input.value = (Number(input.value) - 1) + '';
            if (arrowUp.classList.contains("arrow--inactive")){
                arrowUp.classList.remove("arrow--inactive");
            }
        }
    }
}
function deactivationArrow(firstArrow, secondArrow){
    if (!firstArrow.classList.contains("arrow--inactive")){
        firstArrow.classList.add("arrow--inactive");
        secondArrow.classList.remove("arrow--inactive");
    }
}
selectColor();
selectSize();
customInputTypeNumber();


    