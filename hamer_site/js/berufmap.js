var map = L.map('map', {
	center: [54.336753, 10.119905],
	zoom: 12,
	layers: [grayscale]
});

var baseLayers = {
	"Graue Karte": grayscale,
	"Bunte Karte": streets
};

var overlays = {
	"Arbeit": arbeit.addTo(map),
	"Studium": studium,
	"Praktika": praktika,
	"Konferenzen": konferenzen,
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
