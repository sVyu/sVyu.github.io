const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const loginFormBox = document.querySelector('#login-form-box')

const ddayBox2 = document.querySelector("#dday-box");
const weatherBox2 = document.querySelector("#weather-box");
const todoBox2 = document.querySelector("#todo-box");
const clockBox2 = document.querySelector("#clock-box");
const quoteBox2 = document.querySelector("#quote-box");
const iconBox2 = document.querySelector("#icon-box");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault();
    // console.log(event);
    // loginForm.classList.add(HIDDEN_CLASSNAME);
    loginFormBox.classList.add(HIDDEN_CLASSNAME);
    ddayBox2.classList.remove(HIDDEN_CLASSNAME);
    weatherBox2.classList.remove(HIDDEN_CLASSNAME);
    todoBox2.classList.remove(HIDDEN_CLASSNAME);
    quoteBox2.classList.remove(HIDDEN_CLASSNAME);
    iconBox2.classList.remove(HIDDEN_CLASSNAME);

    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username){
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `${username}`;
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

loginForm.addEventListener("submit", onLoginSubmit);

if(savedUsername === null){
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    ddayBox2.classList.add(HIDDEN_CLASSNAME);
    weatherBox2.classList.add(HIDDEN_CLASSNAME);
    todoBox2.classList.add(HIDDEN_CLASSNAME);
    quoteBox2.classList.add(HIDDEN_CLASSNAME);
    iconBox2.classList.add(HIDDEN_CLASSNAME);
    console.log("test!!!");
} else{
    // show the greetings
    loginFormBox.classList.add(HIDDEN_CLASSNAME);
    paintGreetings(savedUsername);
}
