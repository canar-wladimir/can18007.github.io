var weatherObjet1 = new XMLHttpRequest();
var weatherObjet2 = new XMLHttpRequest();
var weatherObjet3 = new XMLHttpRequest();
var weatherObjet4 = new XMLHttpRequest();

weatherObjet1.open('GET', 'http://api.openweathermap.org/data/2.5/weather?zip=77500,mx&appid=9b187cb192bbfd069044eebd166f188e&units=imperial',true);
weatherObjet2.open('GET', 'http://api.openweathermap.org/data/2.5/weather?zip=99720,us&appid=9b187cb192bbfd069044eebd166f188e&units=imperial',true);
weatherObjet3.open('GET', 'http://api.openweathermap.org/data/2.5/weather?zip=99502,us&appid=9b187cb192bbfd069044eebd166f188e&units=imperial',true);
weatherObjet4.open('GET', 'http://api.openweathermap.org/data/2.5/weather?zip=36551,us&appid=9b187cb192bbfd069044eebd166f188e&units=imperial',true);

/*weatherObjet.open('GET', '//api.openweathermap.org/data/2.5/weather?zip=77500,mx&appid=9b187cb192bbfd069044eebd166f188e&units=imperial',true);*/

weatherObjet1.send();
weatherObjet2.send();
weatherObjet3.send();
weatherObjet4.send();

weatherObjet1.onload = function() {
    var weatherInfo1 = JSON.parse(weatherObjet1.responseText);

    console.log(weatherInfo1);

    document.getElementById('wMain1').innerHTML = weatherInfo1.weather[0].main;
    document.getElementById('currentTemp1').innerHTML = "Temp:" + weatherInfo1.main.temp + "F";
    document.getElementById('currentHumidity1').innerHTML = "Humidity:" + weatherInfo1.main.humidity+"%";
} 

weatherObjet2.onload = function() {
    var weatherInfo2 = JSON.parse(weatherObjet2.responseText);

    console.log(weatherInfo2);

    document.getElementById('wMain2').innerHTML = weatherInfo2.weather[0].main;
    document.getElementById('currentTemp2').innerHTML = "Temp:" + weatherInfo2.main.temp + "F";
    document.getElementById('currentHumidity2').innerHTML = "Humidity:" + weatherInfo2.main.humidity+"%";

} 

weatherObjet3.onload = function() {
    var weatherInfo3 = JSON.parse(weatherObjet3.responseText);

    console.log(weatherInfo3);

    document.getElementById('wMain3').innerHTML = weatherInfo3.weather[0].main;
    document.getElementById('currentTemp3').innerHTML = "Temp:" + weatherInfo3.main.temp + "F";
    document.getElementById('currentHumidity3').innerHTML = "Humidity:" + weatherInfo3.main.humidity+"%";

} 

weatherObjet4.onload = function() {
    var weatherInfo4 = JSON.parse(weatherObjet4.responseText);

    console.log(weatherInfo4);

    document.getElementById('wMain4').innerHTML = weatherInfo4.weather[0].main;
    document.getElementById('currentTemp4').innerHTML = "Temp:" + weatherInfo4.main.temp + "F";
    document.getElementById('currentHumidity4').innerHTML = "Humidity:" + weatherInfo4.main.humidity+"%";

} 



