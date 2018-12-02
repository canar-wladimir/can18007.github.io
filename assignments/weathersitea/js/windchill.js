var a = parseFloat(document.getElementById("n1").textContent);
var b = parseFloat(document.getElementById("n2").textContent);

function windchill(winspeed, temperature) {
    var wc = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(winspeed,0.16) + 0.4275 * temperature * Math.pow(winspeed,0.16);
    return wc.toFixed(2)
}

document.getElementById("wchill").innerHTML = windchill(a, b);

