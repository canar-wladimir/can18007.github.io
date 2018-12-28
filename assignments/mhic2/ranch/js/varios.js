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
            var myList = document.createElement('ul');
            myList.textContent = "Your tour includes:";
            var tourcontain = tourh3[j].contains;
            for (var k = 0; k < tourcontain.length; k++) {
                var listItem = document.createElement('li');
                listItem.textContent = tourcontain[k];
                myList.appendChild(listItem);
            }

            var mynotes = document.createElement('p');

            mydiv_contain.appendChild(myList);
            mydiv_contain.appendChild(mynotes);
            //mydiv_contain    

            //mydiv_price
            var divp1 = document.createElement('div');
            var divp2 = document.createElement('div');
            var divp3 = document.createElement('div');
            var divp4 = document.createElement('div');
            var divp5 = document.createElement('div');
            var padult = document.createElement('p');
            var pchild = document.createElement('p');
            var pradult = document.createElement('p');
            var prchild = document.createElement('p');
            var fpradult = document.createElement('p');
            var fprchild = document.createElement('p');
            
            var pricea = tourh3[j].pricea;          
            var pricec = tourh3[j].pricec;
            var finalpa = tourh3[j].costa + 10;
            var finalpc = tourh3[j].costc + 5;
            var descuento = 100-((finalpa*100)/pricea);
                       
            padult.textContent = "Adult:";
            pchild.textContent = "Child:";
            pradult.textContent = "Usd:" + pricea + ".00";
            prchild.textContent = "Usd:" + pricec + ".00";
            fpradult.textContent = "Usd:" + finalpa + ".00";
            fprchild.textContent = "Usd:" + finalpc + ".00";
            divp4.textContent = descuento.toFixed(0) + "% Off to our special price"
            divp5.textContent = "Note: 5% aditional charge if you paid with Credit Card"

            divp1.appendChild(padult);
            divp1.appendChild(pchild);
            divp2.appendChild(pradult);
            divp2.appendChild(prchild);
            divp3.appendChild(fpradult);
            divp3.appendChild(fprchild);

            mydiv_price.appendChild(divp1);
            mydiv_price.appendChild(divp2);
            mydiv_price.appendChild(divp3);
            mydiv_price.appendChild(divp4);
            mydiv_price.appendChild(divp5);          
            //mydiv_price    





            mydiv.appendChild(mydiv_h3);
            mydiv.appendChild(mydiv_photo);
            mydiv.appendChild(mydiv_contain);
            mydiv.appendChild(mydiv_price);
            mydiv.appendChild(mydiv_form);
            
            
        }

        section.appendChild(myh2tour);
        section.appendChild(myptour);
        section.appendChild(myaside);
        section.appendChild(mydiv);


        
        
    }

}