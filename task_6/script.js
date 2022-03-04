"use strict";
// russian version
const rusWeek = {
  0: "Воскресенье",
  1: "Понедельник", 
  2: "Вторник",
  3: "Среда",
  4: "Четверг",
  5: "Пятница",
  6: "Суббота"
};

const rusMonths = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];

document.body.innerHTML = "<div></div>";
document.body.insertAdjacentHTML("beforeend", "<div></div>");
document.body.insertAdjacentHTML("beforeend", "<div></div>");
document.body.insertAdjacentHTML("beforeend", "<div></div>");

const divs = document.querySelectorAll("div");
const div1 = divs[0];
const div2 = divs[1];
const div3 = divs[2];
const div4 = divs[3];

setInterval( () => {
  let today = new Date();
  let weekday = rusWeek[today.getUTCDay()];
  let timeNow = today.toLocaleTimeString('en-US');
  let hours = today.getHours();
  let daypart;
  if (hours > 0 && hours < 6) {
    daypart = "Доброй ночи";
  } else if ( hours >= 6  && hours < 12) {
    daypart = "Доброе утро";
  } else if ( hours >= 12  && hours < 18) {
    daypart = "Добрый день";
  }  else {
    daypart = "Доброй ночи";
  };
  let newYearDay= new Date(today.getYear()>1900?(today.getYear()+1):(today.getYear()+1901),0,1);
  let daysRest = Math.floor((newYearDay-today)/1000/60/60/24 );
   
  div1.textContent = `${daypart}`;
  div2.textContent = `Сегодня: ${weekday}`;
  div3.textContent = `Текущее время:  ${timeNow}`;
  div4.textContent = `До Нового года осталось ${daysRest} дней`;
}, 1000) 


