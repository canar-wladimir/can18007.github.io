var header = document.querySelector('header');
var section = document.querySelector('section');
var requestURL = 'https://can18007.github.io/assignments/mhic2/ranch/js/varios.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    var tours = request.response;
     console.log(tours);
 	showTours(tours);
}

function showTours(jsonObj) {
    var tours = jsonObj['tours'];

    for (var i = 0; i < tours.length; i++) {
        var myh1tour = document.createElement('h1');
        var myptour = document.createElement('p');
        var myaside = document.createElement('aside');
        var mydiv = document.createElement('div')
        
        myh1tour.textContent = tours[i].toursType;

        section.appendChild(myh1tour);
        
    }

}