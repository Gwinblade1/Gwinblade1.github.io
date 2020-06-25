function geodecoder(){
    const geocoder = new google.maps.Geocoder();
    navigator.geolocation.getCurrentPosition(pos => {
        geocoder.geocode({'location': {lat: parseFloat(pos.coords.latitude), lng: parseFloat(pos.coords.longitude)}}, (result, status) => {    
            if (status === 'OK'){
                setCurrencyProperty(result);
            }
        });  
    });  
}
function setCurrencyProperty(objectGeolocation){
    alert(`Ти живеш в ${objectGeolocation[1].formatted_address}`);
}
function changeCurrency(){
    if(localStorage.getItem('currency')){
        document.forms.currencyForm.elements.currency.value = localStorage.currency;
        document.querySelector(`[data-currency="${localStorage.currency}"]`).classList.add("currency-list__item--inactive");
    }
}
function currencySelect(){
    const currencyBox =  document.querySelector(".top-bar__currency");
    const currencyList = currencyBox.querySelector(".currency-list");
    const currencyListItems = currencyList.querySelectorAll(".currency-list__item");
    return (event) => {
        if (event.target.closest(".top-bar__currency") && !currencyList.classList.contains("currency-list--active")){
            currencyList.classList.add("currency-list--active");
        }
        else if(event.target.closest(".currency-list__item")){
            localStorage.currency = event.target.closest(".currency-list__item").dataset.currency;
            currencyList.classList.remove("currency-list--active");
            Array.from(currencyListItems).forEach(item => item.classList.remove("currency-list__item--inactive"));
            changeCurrency();
        }
        else if(!event.target.closest(".currency-list__item") && currencyList.classList.contains("currency-list--active")){
            currencyList.classList.remove("currency-list--active");
        }
    }
}
window.addEventListener('load', () => {
    changeCurrency();
});
window.addEventListener('click', event => {
    const currencySelectListener = currencySelect();
    currencySelectListener(event);
});
