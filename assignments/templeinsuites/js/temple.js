var templeObject = new XMLHttpRequest();
/*byuObjet.open('GET', 'https://byui-cit230.github.io/weather/data/towndata.json',true);*/
templeObject.open('GET','https://can18007.github.io/assignments/templeinsuites/js/temple.json',true);
//templeObjet.open('GET', '//byui-cit230.github.io/weather/data/towndata.json',true);

templeObject.send();
templeObject.onload = function() {
    var templeInfo = JSON.parse(templeObject.responseText);
    console.log(templeInfo);

    document.getElementById('name').innerHTML = "<strong>Name:</strong>" + templeInfo.temples[0].name;
    document.getElementById('address').innerHTML = templeInfo.temples[0].address + " Tel:" + templeInfo.temples[0].telephone;
    document.getElementById('email').innerHTML = "<strong>e-mail:</strong>" + templeInfo.temples[0].email;
    document.getElementById('email').innerHTML = "<strong>Services:</strong>" + templeInfo.temples[0].services;
    document.getElementById('email').innerHTML = "<strong>History:</strong>" + templeInfo.temples[0].history;
    document.getElementById('email').innerHTML = "<strong>services:</strong>" + templeInfo.temples[0].services;


    /*
    document.getElementById('yearFounded').innerHTML = "<strong>Year Founded:</strong>" + byuInfo.towns[0].yearFounded;
    document.getElementById('currentPopulation').innerHTML = "<strong>Population:</strong>" + byuInfo.towns[0].currentPopulation;
    document.getElementById('averageRainfall').innerHTML = "<strong>Annual Rain Fall:</strong>" + byuInfo.towns[0].averageRainfall;

    document.getElementById('name2').innerHTML = byuInfo.towns[2].name;
    document.getElementById('motto2').innerHTML = byuInfo.towns[2].motto;
    document.getElementById('yearFounded2').innerHTML = "<strong>Year Founded:</strong>" + byuInfo.towns[2].yearFounded;
    document.getElementById('currentPopulation2').innerHTML = "<strong>Population:</strong>" + byuInfo.towns[2].currentPopulation;
    document.getElementById('averageRainfall2').innerHTML = "<strong>Annual Rain Fall:</strong>" + byuInfo.towns[2].averageRainfall;

    document.getElementById('name3').innerHTML = byuInfo.towns[6].name;
    document.getElementById('motto3').innerHTML = byuInfo.towns[6].motto;
    document.getElementById('yearFounded3').innerHTML = "<strong>Year Founded:</strong>" + byuInfo.towns[6].yearFounded;
    document.getElementById('currentPopulation3').innerHTML = "<strong>Population:</strong>" + byuInfo.towns[6].currentPopulation;
    document.getElementById('averageRainfall3').innerHTML = "<strong>Annual Rain Fall:</strong>" + byuInfo.towns[6].averageRainfall;
*/
} // end of the funtion
