var weatherObjet = new XMLHttpRequest();
weatherObjet.open('GET', '//api.openweathermap.org/data/2.5/weather?zip=77500,mx&appid=9b187cb192bbfd069044eebd166f188e&units=imperial',true);

weatherObjet.send();
weatherObjet.onload = function() {
    var weatherInfo = JSON.parse(weatherObjet.responseText);
    console.log(weatherInfo);

    document.getElementById('place').innerHTML = weatherInfo.name;
    document.getElementById('currentTemp').innerHTML = weatherInfo.main.temp;
    document.getElementById('currentWind').innerHTML = weatherInfo.wind.speed;

    var iconcode = weatherInfo.weather[0].icon;
    var icon_path = "//openweathermap.org/img/w/"+iconcode+".png ";
    document.getElementById('weather_icon').innerHTML = icon_path;

    console.log(icon_path);

} // end of the funtion
