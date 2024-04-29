window.onload = function () {
  
    let seconds = 0; 
    let minutes = 0; 
    
    let minutesElem = document.getElementById("minutes")
    let secondsElem = document.getElementById("seconds")
    
    let buttonStart = document.getElementById('button__start');
    let buttonStop = document.getElementById('button__stop');
    let buttonReset = document.getElementById('button__reset');
    
    let Interval ;
  
    buttonStart.onclick = function() {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    };
    
    buttonStop.onclick = function() {
        clearInterval(Interval);
    };
    
  
    buttonReset.onclick = function() {
        clearInterval(Interval);
        minutes = pad(0, 2);
        seconds = pad(0, 2);
        minutesElem.innerHTML = minutes;
        secondsElem.innerHTML = seconds;
    };

    function pad(num, size) {
        num = num.toString();
        while (num.length < size) {
            num = "0" + num;
        }    
        return num;
    }
    
    
    function startTimer () {
        seconds++; 
        
        if (seconds >= 60) {
            seconds = 0
            minutes += 1
        }

        secondsString = pad(seconds, 2)
        minutesString = pad(minutes, 2)

        secondsElem.innerHTML = secondsString
        minutesElem.innerHTML = minutesString
    };
}