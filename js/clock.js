// 5.0 Intervals
// 5.1 Timeouts and Dates
// 5.2 PadStart
const clock = document.querySelector("span#clock");

// clock.innerText = "lalala";
// function sayHello(){
//     console.log("hello");
// }

// setInterval은 지정한 시간에 따라 반복해서 수행
// setInterval(sayHello, 1000);

// setTimeout은 지정한 시간 뒤에 한 번만 수행
// setTimeout(sayHello, 3000);

function getClock(){
    const date = new Date();
    let AMPM = "";

    // const hours = String(date.getHours()).padStart(2, "0");
    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    if(hours >= 12){
        AMPM = "PM";
        if(hours > 12){
            hours -=12;
        }
    } else{
        AMPM = "AM";
    }
    // clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds().toString().padStart(2,"0")}`;
    clock.innerText = `${AMPM} ${hours} : ${minutes}`;
}

getClock();
setInterval(getClock, 1000);