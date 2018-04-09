var result=JSON.parse(document.currentScript.getAttribute('result')); //1
var marker = [];
var popupHTML="<br><a href='/addinfo'>Add more information</a><br><div id=\"contact\">Contact</div>";

function style(feature) {
    return {
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7,
        fillColor: 'yellow',
    };
}

var k;
for (k = 0; k < result.length; k++) {
    marker.push(L.marker([result[k].Lat, result[k].Lang]));
}

function mapelementfunc() {
    var elmnt = document.getElementById("content");
    var y = elmnt.scrollTop;
    console.log(y);


    var i=0,j=0;
    
    if (y>(i+1)*180) { //Lumbini
        marker[i].addTo(mymap);
        mymap.setView([result[i].Lat, result[i].Lang], 5);
        marker[i].bindPopup("<b>"+result[i].name+"</b>"+popupHTML);
        i++;


        if (y>(i+1)*180) { //Bodh Gaya
            marker[i].addTo(mymap);
            mymap.setView([result[i].Lat, result[i].Lang], 5);
            marker[i].bindPopup("<b>"+result[i].name+"</b>"+popupHTML);
            i++;


            if (y>(i+1)*180) { //Sarnath
                marker[i].addTo(mymap);
                mymap.setView([result[i].Lat, result[i].Lang], 5);
                marker[i].bindPopup("<b>"+result[i].name+"</b>"+popupHTML);
                i++;

                if (y>(i+1)*180) { //India-Nepal-Bangladesh
                    var geojson = L.geoJson(cdata[j], {
                        style: style,
                    }).addTo(mymap);
                    mymap.setView([result[i].Lat, result[i].Lang], 3);
                    geojson.bindPopup("<b>"+result[i].name+"</b>"+popupHTML);
                    j++; i++;

                    if (y>(i+1)*180) { //Kushinagar
                        marker[i].addTo(mymap);
                        mymap.setView([result[i].Lat, result[i].Lang], 5);
                        marker[i].bindPopup("<b>"+result[i].name+"</b>"+popupHTML);
                        i++;

                        if (y>(i+1)*180) { //Sri Lanka
                            var geojson = L.geoJson(cdata[j], {
                                style: style,
                            }).addTo(mymap);
                            mymap.setView([result[i].Lat, result[i].Lang], 3);
                            geojson.bindPopup("<b>"+result[i].name+"</b>"+popupHTML);
                            j++; i++;

                            if (y>(i+1)*180) { //South East Asia
                                var geojson = L.geoJson(cdata[j], {
                                    style: style,
                                }).addTo(mymap);
                                mymap.setView([result[i].Lat, result[i].Lang], 3);
                                geojson.bindPopup("<b>"+result[i].name+"</b>"+popupHTML);
                                j++; i++;

                                if (y>(i+1)*180) { //Central Asia
                                    var geojson = L.geoJson(cdata[j], {
                                        style: style,
                                    }).addTo(mymap);
                                    mymap.setView([result[i].Lat, result[i].Lang], 3);
                                    geojson.bindPopup("<b>"+result[i].name+"</b>"+popupHTML);
                                    j++; i++;

                                    if (y>(i+1)*180) { //East Asia
                                        var geojson = L.geoJson(cdata[j], {
                                            style: style,
                                        }).addTo(mymap);
                                        mymap.setView([result[i].Lat, result[i].Lang], 3);
                                        geojson.bindPopup("<b>"+result[i].name+"</b>"+popupHTML);
                                        j++; i++;

                                        if (y>(i+1)*180) { //Tibet-Bhutan
                                            var geojson = L.geoJson(cdata[j], {
                                                style: style,
                                            }).addTo(mymap);
                                            mymap.setView([result[i].Lat, result[i].Lang], 3);
                                            geojson.bindPopup("<b>"+result[i].name+"</b>"+popupHTML);
                                            j++; i++;

                                        }
                                        else
                                        {  geojson[j].remove(); i--; j--;}

                                    }
                                    else
                                    { geojson[j].remove(); i--; j--;}

                                }
                                else
                                { geojson[j].remove(); i--; j--;}

                            }
                            else
                            { geojson[j].remove(); i--; j--;}

                        }
                        else
                        { geojson[j].remove(); i--; j--;}
                    }
                    else
                    { marker[i].remove(); i--;}

                }
                else
                { geojson[j].remove(); i--; j--;}

            }
            else
            {  marker[i].remove(); i--;}
        }
        else
        {  marker[i].remove(); i--;}
    }
    else{
        marker[i].remove(); i--; }

}







