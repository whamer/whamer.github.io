var map = L.map('map', {
	center: [52.366352, 4.558987],
	zoom: 4,
	layers: [grayscale]
});

var baseLayers = {
	"Graue Karte": grayscale,
	"Bunte Karte": streets
};

var overlays = {
	"Arbeit": arbeit,
	"Studium": studium,
	"Praktika": praktika,
	"Konferenzen": konferenzen.addTo(map),
	"Sonstiges": sonstiges
};

L.control.layers(baseLayers, overlays).addTo(map);


document.querySelector('#zoom1').onclick = function(abc) {
    var pos = abc.target.getAttribute('data-position');
    var zoom = abc.target.getAttribute('data-zoom');
    if (pos && zoom) {
        var locat = pos.split(',');
        var zoo = parseInt(zoom);
        map.setView(locat, zoo, {animation: true});
        return false;
    }
} 

document.querySelector('#zoom2').onclick = function(abc) {
    var pos = abc.target.getAttribute('data-position');
    var zoom = abc.target.getAttribute('data-zoom');
    if (pos && zoom) {
        var locat = pos.split(',');
        var zoo = parseInt(zoom);
        map.setView(locat, zoo, {animation: true});
        return false;
    }
} 

document.querySelector('#zoom3').onclick = function(abc) {
    var pos = abc.target.getAttribute('data-position');
    var zoom = abc.target.getAttribute('data-zoom');
    if (pos && zoom) {
        var locat = pos.split(',');
        var zoo = parseInt(zoom);
        map.setView(locat, zoo, {animation: true});
        return false;
    }
} 

document.querySelector('#zoom4').onclick = function(abc) {
    var pos = abc.target.getAttribute('data-position');
    var zoom = abc.target.getAttribute('data-zoom');
    if (pos && zoom) {
        var locat = pos.split(',');
        var zoo = parseInt(zoom);
        map.setView(locat, zoo, {animation: true});
        return false;
    }
} 

document.querySelector('#zoom5').onclick = function(abc) {
    var pos = abc.target.getAttribute('data-position');
    var zoom = abc.target.getAttribute('data-zoom');
    if (pos && zoom) {
        var locat = pos.split(',');
        var zoo = parseInt(zoom);
        map.setView(locat, zoo, {animation: true});
        return false;
    }
} 

document.querySelector('#zoom6').onclick = function(abc) {
    var pos = abc.target.getAttribute('data-position');
    var zoom = abc.target.getAttribute('data-zoom');
    if (pos && zoom) {
        var locat = pos.split(',');
        var zoo = parseInt(zoom);
        map.setView(locat, zoo, {animation: true});
        return false;
    }
} 

document.querySelector('#zoom7').onclick = function(abc) {
    var pos = abc.target.getAttribute('data-position');
    var zoom = abc.target.getAttribute('data-zoom');
    if (pos && zoom) {
        var locat = pos.split(',');
        var zoo = parseInt(zoom);
        map.setView(locat, zoo, {animation: true});
        return false;
    }
} 

document.querySelector('#zoom8').onclick = function(abc) {
    var pos = abc.target.getAttribute('data-position');
    var zoom = abc.target.getAttribute('data-zoom');
    if (pos && zoom) {
        var locat = pos.split(',');
        var zoo = parseInt(zoom);
        map.setView(locat, zoo, {animation: true});
        return false;
    }
} 

document.querySelector('#zoom9').onclick = function(abc) {
    var pos = abc.target.getAttribute('data-position');
    var zoom = abc.target.getAttribute('data-zoom');
    if (pos && zoom) {
        var locat = pos.split(',');
        var zoo = parseInt(zoom);
        map.setView(locat, zoo, {animation: true});
        return false;
    }
} 