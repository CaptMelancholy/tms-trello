import Element from "./Element.js";

export default class Clock {

    static startTime() {
        const checkTime = (i) => {
            return i < 10 ? i = '0' + i : i;
        }
        let now = new Date();
        let hours = now.getHours();
        let min = checkTime(now.getMinutes());
        let seconds = checkTime(now.getSeconds());
        document.getElementById('header__clocks__content').textContent = hours + ':' + min + ':' + seconds;  
    }

    
}