window.onload = function () {
  
    let seconds = 0; 
    let minutes = 0; 
    
    let minutesElem = document.getElementById('minutes');
    let secondsElem = document.getElementById('seconds');
    
    let buttonStart = document.getElementById('button__start');
    let buttonStop = document.getElementById('button__stop');
    let buttonReset = document.getElementById('button__reset');
    
    let Interval;
    
    const numLen = 2;
    const numFill = '0';

    buttonStart.onclick = function() {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 1000);
    };
    
    buttonStop.onclick = function() {
        clearInterval(Interval);
    };
    
  
    buttonReset.onclick = function() {
        clearInterval(Interval);
        seconds = 0;
        minutes = 0;
        
        secondsString = seconds.toString().padStart(numLen, numFill);
        minutesString = minutes.toString().padStart(numLen, numFill);

        minutesElem.innerHTML = minutesString;
        secondsElem.innerHTML = secondsString;
    };
    
    function startTimer () {
        seconds++; 
        
        if (seconds >= 60) {
            seconds = 0;
            minutes += 1;
        }

        secondsString = seconds.toString().padStart(numLen, numFill);
        minutesString = minutes.toString().padStart(numLen, numFill);

        secondsElem.innerHTML = secondsString;
        minutesElem.innerHTML = minutesString;
    };
}