var studium = L.layerGroup();
L.circleMarker([54.336807, 10.119973],{color: 'yellow', "radius": 10}).addTo(studium).bindPopup('<b>Geographisches Institut der CAU Kiel</b><br />Promotion 2014 - 2018<br />M.Sc. Umweltgeographie und Management 2011 - 2014<br />B.Sc. Geographie 2008 - 2012<br /> <a href="https://www.lgi.geographie.uni-kiel.de/de">Link</a>');

L.circleMarker([53.647183, 10.276440],{color: 'yellow', "radius": 10}).addTo(studium).bindPopup('<b>Emil-von-Behring-Gymnasium Großhansdorf</b><br />Abitur 2007<br /> <a href="https://evb.eu/">Link</a>');

  
	
var arbeit = L.layerGroup();
L.circleMarker([54.336807, 10.119973],{color: 'red', "radius": 15}).addTo(arbeit).bindPopup('<b>Geographisches Institut der CAU Kiel</b><br />Aktuelle Arbeit<br /> <a href="https://www.lgi.geographie.uni-kiel.de/de">Link</a>');
  
var praktika = L.layerGroup();

L.circleMarker([54.246783, 10.050480]).addTo(praktika).bindPopup('<b>Landesamt für Landwirtschaft, Umwelt und ländliche Räume</b><br />Praktikum 2013<br /> <a href="https://www.schleswig-holstein.de/DE/Landesregierung/LLUR/Organisation/abteilungen/abteilung6.html">Link</a>');
  
L.circleMarker([52.287186, 10.445772]).addTo(praktika).bindPopup('<b>Johann Heinrich von Thünen-Institut</b><br />Praktikum 2010<br /> <a href="https://www.thuenen.de/de/ak/">Link</a>');
  
L.circleMarker([53.572403, 9.990093]).addTo(praktika).bindPopup('<b>Hamburg 1 Fernsehen</b><br />Praktikum 2008<br /> <a href="https://www.hamburg1.de/">Link</a>');
  
var sonstiges = L.layerGroup();
   
L.circleMarker([52.455151, 13.289561],{color: 'grey', "radius": 8}).addTo(sonstiges).bindPopup('<b>"Reproducible Research in Landscape Archaeology"</b><br />Summer School 2017 (Lehrender/Teilnehmern)<br /> <a href="https://www.topoi.org/event/42329/">Link</a>');
  
  
var konferenzen = L.layerGroup();
 
L.circleMarker([52.517426, 13.393870],{color: 'green', "radius": 8}).addTo(konferenzen).bindPopup('<b>"Deutscher Kongress für Geographie"</b><br />Konferenz 2015 (Vortragender)<br /> <a href="https://www.congressa.de/dkg-2015/index.php">Link</a>');

L.circleMarker([53.557136, 10.023122],{color: 'green', "radius": 8}).addTo(konferenzen).bindPopup('<b>"Simulation in den Umwelt- und Geowissenschaften"</b><br />Workshop 2016 (Vortragender)<br /> <a href="https://gi.de/veranstaltung/simulation-in-den-umwelt-und-geowissenschaften-workshop-2016">Link</a>');
  
L.circleMarker([47.788718, 13.060326],{color: 'green', "radius": 8}).addTo(konferenzen).bindPopup('<b>"AGIT"</b><br />Konferenz 2016 (Vortragender)<br /> <a href="https://gispoint.de/gisopen-paper/3901-raeumliche-und-zeitliche-vorhersage-der-eintrittswahrscheinlichkeit-eines-ertragsgefaehrdenden-mehltauereignisses-an-winterweizen-mit-der-random-forest-methode.html">Link</a>');
   
L.circleMarker([51.485856, 11.970105],{color: 'green', "radius": 8}).addTo(konferenzen).bindPopup('<b>"Deutsche Pflanzenschutztagung"</b><br />Konferenz 2016 (Vortragender)');
  
L.circleMarker([52.275545, 10.569077],{color: 'green', "radius": 8}).addTo(konferenzen).bindPopup('<b>"Tagung des DPG-Arbeitskreises Krankheiten in Getreide und Mais"</b><br />Konferenz 2017 / 2018 (Vortragender)');
  
L.circleMarker([48.711366, 9.210310],{color: 'green', "radius": 8}).addTo(konferenzen).bindPopup('<b>"Deutsche Pflanzenschutztagung"</b><br />Konferenz 2018 (Vortragender)');
  
L.circleMarker([54.979782, -1.616713],{color: 'green', "radius": 8}).addTo(konferenzen).bindPopup('<b>"Landscape Archaeology Conference"</b><br />Konferenz 2018 (Sitzungsleiter / Vortragender)<br /> <a href="https://www.ncl.ac.uk/mccordcentre/lac2018/">Link</a>');
   
L.circleMarker([54.345169, 10.109258],{color: 'green', "radius": 8}).addTo(konferenzen).bindPopup('<b>"Socio-Environmental Dynamics over the Last 12,000 Years: The Creation of Landscapes"</b><br />Konferenz 2017 / 2019 (Vortragender)');
   
L.circleMarker([54.338283, 10.123632],{color: 'green', "radius": 8}).addTo(konferenzen).bindPopup('<b>"Deutscher Kongress für Geographie"</b><br />Konferenz 2019 (Vortragender)');

var mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
		'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
		'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';

var grayscale   = L.tileLayer(mbUrl, {id: 'mapbox/light-v9', attribution: mbAttr}),
	streets  = L.tileLayer(mbUrl, {id: 'mapbox/streets-v11',   attribution: mbAttr});

