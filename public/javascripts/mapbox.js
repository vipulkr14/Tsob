var mymap = L.map('mapid');
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 7,
    id: 'mapbox.high-contrast',
    accessToken: 'pk.eyJ1IjoidmlwdWxrcjE0IiwiYSI6ImNqZmJ2OTB4aTMzdDUyeHA0NWM1c2hwOWEifQ.dAWfq5jQRn13KmmulNVOcw\n'
}).addTo(mymap);

mymap.setView([28.3949, 84.1240], 3);