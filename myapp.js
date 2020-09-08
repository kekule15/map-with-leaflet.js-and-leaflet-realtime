var mymap = L.map('map').setView([50.84673, 4.35247], 12);

var circle = L.circle([50.84673, 4.35247], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(mymap);

var LeafIcon = L.Icon.extend({
    options: {
        shadowUrl: 'leaf-shadow.png',
        iconSize:     [38, 95],
        shadowSize:   [50, 64],
        iconAnchor:   [22, 94],
        shadowAnchor: [4, 62],
        popupAnchor:  [-3, -76],
    }
});
var greenIcon = new LeafIcon({iconUrl: 'leaf-green.png'}),
    redIcon = new LeafIcon({iconUrl: 'leaf-red.png'}),
    orangeIcon = new LeafIcon({iconUrl: 'leaf-orange.png'});
var marker = L.marker([50.84673, 4.35247],{icon: greenIcon}).addTo(mymap).bindPopup("I am a green leaf.");
var marker = L.marker([50.54670, 4.1525],{icon: redIcon}).addTo(mymap).bindPopup("I am a red leaf.");

var marker = L.marker([50.2460, 4.05255],{icon: orangeIcon}).addTo(mymap).bindPopup("I am an orange leaf.");

//var popup = marker.bindPopup('<b>Hello world!</b><br />I am a popup.');

//popup.openPopup();

L.tileLayer('https://tile.openstreetmap.be/osmbe/{z}/{x}/{y}.png', {
    attribution:
        '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors' +
        ', Tiles courtesy of <a href="https://geo6.be/">GEO-6</a>',
    maxZoom: 18
}).addTo(mymap);