function select(){
    let selectBox = document.querySelector(".select-color");
    let selectList = selectBox.getElementsByClassName("color-list");
    let selectItem = document.getElementsByClassName("color-list__item");
    selectBox.onclick = () => {
        selectList[0].classList.toggle("color-list--active");
    }
    for (let value of selectItem){
        value.onclick = () => {
            for (let elem of selectItem)
                elem.classList.remove("color-list__item--active");
            value.classList.add("color-list__item--active");
            let activeColor = document.querySelector(".color-list__item--active > div.color-list__item-name");
            let selectText = document.querySelector(".select-color__text");
            let colorText = selectText.querySelector(".active-color");
            colorText.style.display = 'none';
            selectText.style.flexDirection = 'row-reverse';
            if (!!selectText.querySelector(".color-list__item-name")){
                selectText.querySelector(".color-list__item-name").remove();
                selectText.appendChild(activeColor.cloneNode(true));
            }
            else selectText.appendChild(activeColor.cloneNode(true));
            selectList.forEach(element => {
                element.classList.remove("color-list--active");
            });
        }
    }
}

function selectSize(){
    let selectBox = document.querySelector(".select-size");
    let selectList = selectBox.getElementsByClassName("size-list");
    let selectItem = document.getElementsByClassName("size-list__item");
    selectBox.onclick = () => {
        selectList[0].classList.toggle("size-list--active");
    }
    for (let value of selectItem){
        value.onclick = () => {
            for (let elem of selectItem)
                elem.classList.remove("size-list__item--active");
            value.classList.add("size-list__item--active");
            let activeSize = document.querySelector(".size-list__item--active > span");
            let selectText = document.querySelector(".select-size__text");
            let sizeText = selectText.querySelector(".active-size");
            sizeText.style.display = 'none';
            selectText.style.flexDirection = 'row-reverse';
            if (!!selectText.querySelector(".size-list__item-name")){
                selectText.querySelector(".size-list__item-name").remove();
                selectText.appendChild(activeSize.cloneNode(true));
            }
            else selectText.appendChild(activeSize.cloneNode(true));
            selectList.forEach(element => {
                element.classList.remove("size-list--active");
            });
        }
    }
}

function selectColor(){
    let selectColorBox = document.querySelector(".select-color");
    let selectColorInput = document.getElementsByClassName("select-color__input");
    let selectColorList = selectBox.getElementsByClassName("color-list");
    let selectColorListItems = selectselectColorList.getElementsByClassName("color-list__item");
    combobox(selectColorBox, selectColorInput, selectColorList, selectColorListItems);
}



function combobox(box, input, list, listItems){
    box.onclick = () => {
        list.forEach(list => {list.classList.toggle("list--active");});
        for (let item of listItems){
            item.onclick = () => {
                listItems.forEach(elem => {elem.classList.remove("list__item--active");});
                item.classList.add("list__item--active");
                input.value = item.textContent;
                list.forEach(list => {list.classList.remove("list--active");});
            }
        }
    }
}

selectColor();