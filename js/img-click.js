const imgCalandar = document.querySelector("#img-calendar");
const imgWeather = document.querySelector("#img-weather");
const imgToDoList = document.querySelector("#img-to-do-list");
const imgClock = document.querySelector("#img-clock");
const imgQuote = document.querySelector("#img-quote");
const imgLogout = document.querySelector("#img-logout");

const ddayBox = document.querySelector("#dday-box");
const weatherBox = document.querySelector("#weather-box");
const todoBox = document.querySelector("#todo-box");
const clockBox = document.querySelector("#clock-box");
const quoteBox = document.querySelector("#quote-box");
const iconBox = document.querySelector("#icon-box");

// background image랑 quote change image는 각각의 js에서 다루는 걸로 처리
// already declared in greeting.js
// const HIDDEN_CLASSNAME = "hidden";

function ToggleDDayBox(){
    ddayBox.classList.toggle(HIDDEN_CLASSNAME);
}

function ToggleWeatherBox(){
    weatherBox.classList.toggle(HIDDEN_CLASSNAME);
}
function ToggleToDoListBox(){
    todoBox.classList.toggle(HIDDEN_CLASSNAME);
}

function ToggleClockBox(){
    clockBox.classList.toggle(HIDDEN_CLASSNAME);
}

function ToggleQuoteBox(){
    quoteBox.classList.toggle(HIDDEN_CLASSNAME);
}

function handleLogout(){
    if(!ddayBox.classList.contains(HIDDEN_CLASSNAME))
        ddayBox.classList.add(HIDDEN_CLASSNAME);
    if(!weatherBox.classList.contains(HIDDEN_CLASSNAME))
        weatherBox.classList.add(HIDDEN_CLASSNAME);
    if(!todoBox.classList.contains(HIDDEN_CLASSNAME))
        todoBox.classList.add(HIDDEN_CLASSNAME);
    if(clockBox.classList.contains(HIDDEN_CLASSNAME))
        clockBox.classList.remove(HIDDEN_CLASSNAME);
    if(!quoteBox.classList.contains(HIDDEN_CLASSNAME))
        quoteBox.classList.add(HIDDEN_CLASSNAME);
    
    iconBox.classList.add(HIDDEN_CLASSNAME);
    loginFormBox.classList.remove(HIDDEN_CLASSNAME);
    loginForm.classList.remove(HIDDEN_CLASSNAME);
}

imgCalandar.addEventListener("click", ToggleDDayBox);
imgWeather.addEventListener("click", ToggleWeatherBox);
imgToDoList.addEventListener("click", ToggleToDoListBox);
imgClock.addEventListener("click", ToggleClockBox);
imgQuote.addEventListener("click", ToggleQuoteBox);
imgLogout.addEventListener("click", handleLogout);