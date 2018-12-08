var templeObject = new XMLHttpRequest();

//templeObject.open('GET','https://can18007.github.io/assignments/templeinsuites/js/temple.json',true);
templeObject.open('GET','//can18007.github.io/assignments/templeinsuites/js/temple.json',true);

templeObject.send();
templeObject.onload = function() {
    var templeInfo = JSON.parse(templeObject.responseText);

    for (var i=1; i < 5; i++) {
    document.getElementById('name'+ i).innerHTML = "<strong>Name:</strong><br>" + templeInfo.temples[i-1].name;
    document.getElementById('address'+ i).innerHTML = "<strong>Address & phone:</strong><br>" + templeInfo.temples[i-1].address + " <br>" + templeInfo.temples[i-1].telephone;
    document.getElementById('email'+ i).innerHTML = "<strong>e-mail:</strong><br>" + templeInfo.temples[i-1].email;
    document.getElementById('services'+ i).innerHTML = "<strong>Services:</strong><br>" + templeInfo.temples[i-1].services;
    document.getElementById('history'+ i).innerHTML = "<strong>History:</strong><br>" + templeInfo.temples[i-1].history;
    document.getElementById('ordinaces'+ i).innerHTML = "<strong>Ordinaces Schedule:</strong><br>" + templeInfo.temples[i-1].ordinanceschedule;
    document.getElementById('sessions'+ i).innerHTML = "<strong>Sessions Schedule:</strong><br>" + templeInfo.temples[i-1].sessionschedule;
    document.getElementById('closure'+ i).innerHTML = "<strong>Temple closure:</strong><br>" + templeInfo.temples[i-1].closure;
    }

    
    
} // end of the funtion
