var templeObjet = new XMLHttpRequest();
/*byuObjet.open('GET', 'https://byui-cit230.github.io/weather/data/towndata.json',true);*/
templeObjet.open('GET', '//byui-cit230.github.io/weather/data/towndata.json',true);

templeObjet.send();
templeObjet.onload = function() {
    var templeInfo = JSON.parse(byuObjet.responseText);
    console.log(templeInfo);

    /*document.getElementById('name').innerHTML = byuInfo.towns[0].name;
    document.getElementById('motto').innerHTML = byuInfo.towns[0].motto;
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

} // end of the funtion*/
