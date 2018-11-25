var today = new Date();
var day = today.getDay()+1;
var day1 = today.getDate();
var month = today.getMonth();
var year = today.getFullYear();
var weekday = new Array(7);
var monthday = new Array(12);

weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
monthday[0] = "January";
monthday[1] = "February";
monthday[2] = "March";
monthday[3] = "April";
monthday[4] = "May";
monthday[5] = "June";
monthday[6] = "July";
monthday[7] = "August";
monthday[8] = "September";
monthday[9] = "October";
monthday[10] = "November";
monthday[11] = "Dicember";

var dayname = weekday[day-1];
var monthname = monthday[month];

var fulldate = dayname + ", " + day1 + " " + monthname + " " + year;

document.getElementById("date").innerHTML = fulldate;

console.log(today);