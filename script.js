let currentDay = document.querySelector(".currentDayOfTheWeek");
let UTCTime = document.querySelector(".currentUTCTime");

function dateAndTime() {
  let today = new Date();
  let day = today.getDay();

  let weeklyDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let todaysDay = weeklyDays[day];
  currentDay.innerHTML = "Today is " + todaysDay;

  let time = today.getTime();
  UTCTime.innerHTML = time;
}
setInterval(dateAndTime, 100);
