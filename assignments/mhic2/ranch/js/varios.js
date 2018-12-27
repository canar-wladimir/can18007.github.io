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
    //section 
    for (var i = 0; i < tours.length; i++) {
        var myh2tour = document.createElement('h2');
        var myptour = document.createElement('p');
        var myaside = document.createElement('aside');
        myaside.className = "aside";
        var mydiv = document.createElement('div')
        
        myh2tour.textContent = tours[i].toursDigram + tours[i].toursType;
        myptour.textContent =tours[i].description;

        var toursfotos = tours[i].fotos;

        //myaside
        for (var j = 0; j < toursfotos.length; j++) {
            var path = 'images/';
            var images = document.createElement('img');
            images.setAttribute("src",path+toursfotos[j]);
            images.setAttribute("alt",toursfotos[j]);;
            myaside.appendChild(images);   
        }

        
        console.log(tourh3);
        //mydiv
        var tourh3 = tours[i].tours;
        for (var j = 0; j < tourh3.length; j++) {
            var mydiv_h3 = document.createElement('h3');
            var mydiv_photo = document.createElement('div');
            var mydiv_contain = document.createElement('div');
            var mydiv_price = document.createElement('div');
            var mydiv_form = document.createElement('div');
            var path = 'images/';
            var images = document.createElement('img');
            images.setAttribute("src",path+tourh3[j].mainpic);
            images.setAttribute("alt",tourh3[j].mainpic);

            console.log(tourh3[j].name);
            mydiv_h3.textContent = tourh3[j].name;
            mydiv_photo.appendChild(images)

            //mydiv_contain
            var tourcontain = tourh3[j].contains;
            for (var k = 0; k < tourcontain.length; k++) {
                mydiv_contain.textContent = tourcontain[k]

                   
            }

            mydiv.appendChild(mydiv_h3);
            mydiv.appendChild(mydiv_photo);
            mydiv.appendChild(mydiv_contain);
            
        }

        section.appendChild(myh2tour);
        section.appendChild(myptour);
        section.appendChild(myaside);
        section.appendChild(mydiv);


        
        
    }

}