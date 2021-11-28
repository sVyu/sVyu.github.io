const clockForChristmas = document.querySelector("#clockForChristmas");

// Date.prototype.getFullYear(), Date.prototype.getTime() 참고
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime

function remainTimeForChristmas(){
    const dateOfNow = new Date();
    // const dateOfNow = new Date('December 26, 2019 00:02:00');
    let dateOfChristmas = new Date(`December 25,${dateOfNow.getFullYear()} 00:00:00`);
    let remainTime = (dateOfChristmas.getTime() - dateOfNow.getTime())/1000;
    // 만약 크리스마스날 이후면서 연도가 바뀌기 이전인 경우, error 방지를 위해 다음과 같이 값을 설정
    if(remainTime < 0){
        dateOfChristmas = new Date(`December 25,${dateOfNow.getFullYear()+1} 00:00:00`);
        remainTime = (dateOfChristmas.getTime() - dateOfNow.getTime())/1000;    // 1000ms == 1s
    }

    const days = Math.floor(remainTime / (24 * 60 * 60));  // 1days == 24hours * 60 minuts * 60seconds
    remainTime -= (days * 24 * 60 * 60);            // 계산 이후 remainTime은 24hours 미만의 잔여 시간

    const hours = Math.floor(remainTime / (60*60)); // hours 계산
    const stringHours = String(hours).padStart(2, "0");
    // remainTime %= (hours * 60 * 60);                // 계산 이후 remainTime은 60 minutes 미만의 잔여 시간
    remainTime -= (hours * 60 * 60);                // 계산 이후 remainTime은 60 minutes 미만의 잔여 시간

    const minutes = Math.floor(remainTime / 60);    // minutes 계산
    const stringMinutes = String(minutes).padStart(2, "0");
    remainTime -= (minutes * 60);                   // 계산 이후 remainTime은 60 seconds 미만의 잔여 시간

    const seconds = Math.floor(remainTime);         // seconds 계산
    const stringSeconds = String(seconds).padStart(2, "0");

    // clockForChristmas.innerText=`${days}D ${stringHours}H ${stringMinutes}M ${stringSeconds}S !`;
    clockForChristmas.innerText=`${days+1} Days !!`;
}

remainTimeForChristmas();
setInterval(remainTimeForChristmas, 1000);

