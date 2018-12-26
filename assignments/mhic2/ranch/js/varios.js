var variosObject = new XMLHttpRequest();

variosObject.open('GET','//can18007.github.io/assignments/mhic2/ranch/js/varios.json',true);

variosObject.send();
variosObject.onload = function() {
    var variosInfo = JSON.parse(templeObject.responseText);
    console.log(variosInfo);

    
    
} // end of the funtion
