function geodecoder(){
    const geocoder = new google.maps.Geocoder();
    setCurrencyProperty(geocoder);
}
async function setCurrencyProperty(geocoder){
  
        let [lat, lng] = navigator.geolocation.getCurrentPosition(function (pos){return [pos.coords.latitude, pos.coords.longitude];});
        let coordinates = await geocoder.geocode({'location': {lat: parseFloat(lat), lng: parseFloat(lng)}}, (result, status) => {
            console.log(result);
            return result;
        });
        console.log(coordinates);
        /*switch(language){
            case 'ua': localStorage.setItem('currency', 'UAH'); break;
            case 'ru': localStorage.setItem('currency', 'RUB'); break;
            case 'en': localStorage.setItem('currency', 'USD'); break;
        }*/
    
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
