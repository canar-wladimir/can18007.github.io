var today = new Date();
var weatherObjet = new XMLHttpRequest();
var weatherObjet2 = new XMLHttpRequest();
var day = today.getDay()+1;
var weekday = new Array(7);
var j = 6;
var a = 1;


weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";


for (day; day <= j; day++) {

    var dayname = weekday[day];
    
    if (a<6) {
        document.getElementById('tomorrow'+a).innerHTML = dayname;
    }
    a++;
    if (day == j) {
        j = j-a;
        day = -1;
    }
}



/*weatherObjet.open('GET', 'http://api.openweathermap.org/data/2.5/weather?zip=33222,us&appid=9b187cb192bbfd069044eebd166f188e&units=imperial',true);
weatherObjet2.open('GET', 'http://api.openweathermap.org/data/2.5/forecast?zip=33222,us&appid=9b187cb192bbfd069044eebd166f188e&units=imperial',true);*/
weatherObjet.open('GET', '//api.openweathermap.org/data/2.5/weather?zip=77500,mx&appid=9b187cb192bbfd069044eebd166f188e&units=imperial',true);
weatherObjet2.open('GET', '//api.openweathermap.org/data/2.5/forecast?zip=77500,mx&appid=9b187cb192bbfd069044eebd166f188e&units=imperial',true);


weatherObjet.send();
weatherObjet2.send();

weatherObjet.onload = function() {
    var weatherInfo = JSON.parse(weatherObjet.responseText);

    console.log(weatherInfo);

    document.getElementById('wMain').innerHTML = weatherInfo.weather[0].main;
    document.getElementById('wMain2').innerHTML = weatherInfo.weather[0].main;
    document.getElementById('currentTemp').innerHTML = weatherInfo.main.temp + "F";
    document.getElementById('currentHumidity').innerHTML = weatherInfo.main.humidity+"%";
    document.getElementById('winSpeed').innerHTML = weatherInfo.wind.speed+"mph";
    var iconcode = weatherInfo.weather[0].icon;
    /*var icon_path = "http://openweathermap.org/img/w/"+iconcode+".png ";*/
    var icon_path = "//openweathermap.org/img/w/"+iconcode+".png ";
    
    document.getElementById('weather_icon').src = icon_path;

    console.log(icon_path);

} // end of the funtion

weatherObjet2.onload = function() {
    var weatherInfo2 = JSON.parse(weatherObjet2.responseText);
    console.log(weatherInfo2);
    document.getElementById('temp1').innerHTML = weatherInfo2.list[0].main.temp+"F";
    document.getElementById('temp2').innerHTML = weatherInfo2.list[1].main.temp+"F";
    document.getElementById('temp3').innerHTML = weatherInfo2.list[2].main.temp+"F";
    document.getElementById('temp4').innerHTML = weatherInfo2.list[3].main.temp+"F";
    document.getElementById('temp5').innerHTML = weatherInfo2.list[4].main.temp+"F";

} // end of the funtion
