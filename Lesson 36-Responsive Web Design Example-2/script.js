var btnMenu = document.getElementById("btn-menu");
var nav = document.getElementsByTagName("nav").item(0);
btnMenu.addEventListener("click", function() {

    if (nav.style.display != "none") {
        nav.style.display = "none";
    } else {
        nav.style.display = "block";
    }

});

var cities = '{"cities":[' +
    '{"countryCode":"TR","cityName":"İstanbul","cityImage":"tr-istanbul.png"},' +
    '{"countryCode":"TR","cityName":"Ankara","cityImage":"tr-ankara.png"},' +
    '{"countryCode":"TR","cityName":"Kastamonu","cityImage":"tr-kastamonu.png"}]}';

var jsonCities = JSON.parse(cities);

//section oluşturma işlemi
var main = document.getElementsByTagName("main").item(0);
main.innerHTML = "";

for (i = 0; i < jsonCities.cities.length; i++) {
    main.innerHTML += '<section class="col-s-4 col-4">' +
        '<img class="img-city" src="img/' + jsonCities.cities[i].cityImage + '" alt="' + jsonCities.cities[i].cityName + '">' +
        '<div class="img-city-name">' + jsonCities.cities[i].cityName + '</div>' +
        '</section>';
}

function selectedCountry(country) {

    var main = document.getElementsByTagName("main").item(0);
    main.innerHTML = "";

    if (country.childNodes[0].nodeValue == "Türkiye") {
        cities = '{"cities":[' +
            '{"countryCode":"TR","cityName":"İstanbul","cityImage":"tr-istanbul.png"},' +
            '{"countryCode":"TR","cityName":"Ankara","cityImage":"tr-ankara.png"},' +
            '{"countryCode":"TR","cityName":"Kastamonu","cityImage":"tr-kastamonu.png"}]}';
    } else if (country.childNodes[0].nodeValue == "Azerbaycan") {
        cities = '{"cities":[' +
            '{"countryCode":"AZ","cityName":"Bakü","cityImage":"az-baku.png"},' +
            '{"countryCode":"AZ","cityName":"Gence","cityImage":"az-gence.png"},' +
            '{"countryCode":"AZ","cityName":"Şeki","cityImage":"az-seki.png"}]}';
    } else if (country.childNodes[0].nodeValue == "Pakistan") {
        cities = '{"cities":[' +
            '{"countryCode":"PK","cityName":"İslamabad","cityImage":"pk-islamabad.png"},' +
            '{"countryCode":"PK","cityName":"Karachi","cityImage":"pk-karachi.png"},' +
            '{"countryCode":"PK","cityName":"Lahor","cityImage":"pk-lahor.png"}]}';
    }

    var jsonCities = JSON.parse(cities);

    //section oluşturma işlemi
    var i;
    for (i = 0; i < jsonCities.cities.length; i++) {
        main.innerHTML += '<section class="col-s-4 col-4">' +
            '<img class="img-city" src="img/' + jsonCities.cities[i].cityImage + '" alt="' + jsonCities.cities[i].cityName + '">' +
            '<div class="img-city-name">' + jsonCities.cities[i].cityName + '</div>' +
            '</section>';
    }
}