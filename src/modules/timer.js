const timer = (deadline) => {
  const timerHours = document.getElementById("timer-hours");
  const timerMinutes = document.getElementById("timer-minutes");
  const timerSeconds = document.getElementById("timer-seconds");

  const getTimeRemaining = () => {
    let dateStop = new Date(deadline).getTime();
    let dateNow = new Date().getTime();
    let timeRemaining = (dateStop - dateNow) / 1000;
    //let days = Math.floor(timeRemaining / 60 / 60 / 24);
   // let hours = Math.floor((timeRemaining / 60 / 60) % 24);
   
    let hours = Math.floor(timeRemaining / 60 / 60);
    let minutes = Math.floor((timeRemaining / 60 ) % 60);
    let seconds = Math.floor(timeRemaining % 60);

    return {timeRemaining, hours, minutes, seconds};
  }
  
  const updateClock = () => {
   
    let getTime = getTimeRemaining();
    console.log (getTime);
    if (getTime.hours.toString().length < 2) {
            getTime.hours = "0" + getTime.hours.toString();
    };
    if (getTime.minutes.toString().length < 2) {
      getTime.minutes = "0" + getTime.minutes.toString();
    };
    if (getTime.seconds.toString().length < 2) {
      getTime.seconds = "0" + getTime.seconds.toString();
    };
    timerHours.textContent = getTime.hours;
    timerMinutes.textContent = getTime.minutes;
    timerSeconds.textContent = getTime.seconds;
    
    if(getTime.timeRemaining > 0) {
      setTimeout(updateClock, 1000);
    } else {
      timerHours.textContent = "00";
      timerMinutes.textContent = "00";
      timerSeconds.textContent = "00";
    };
    
  }
    

  updateClock();
  

 // setInterval(getTimeRemaining, 1000, "08 March 2022")
};

module.exports = timer;

