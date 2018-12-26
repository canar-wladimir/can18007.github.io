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
        var myh2tour = document.createElement('h2');
        var myptour = document.createElement('p');
        var myaside = document.createElement('aside');
        myaside.className = "aside";
        var mydiv = document.createElement('div')
        
        myh2tour.textContent = tours[i].toursType;
        myptour.textContent =tours[i].description;

        var toursfotos = tours[i].fotos;
        for (var j = 0; j < toursfotos.length; j++) {
            var path = 'images/';
            var images = document.createElement('img');
            images.setAttribute("src",path+toursfotos[j]);
            images.setAttribute("alt",toursfotos[j]);;
            myaside.appendChild(images);
            
        }

        section.appendChild(myh2tour);
        section.appendChild(myptour);
        section.appendChild(myaside);


        
        
    }

}