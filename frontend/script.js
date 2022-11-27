
let countriesList = "";
countries.forEach(country => {
    countriesList += `<option value="${country.name.common}">${country.name.common}</option>`;
});
document.getElementById('all').innerHTML = countriesList;


let countryDetailsContainer = document.getElementById("country");
let selectedMenu = document.getElementById("all");
let selectedCountry;

selectedMenu.addEventListener("click", function () {
    selectedCountry = countries.filter(x => x.name.common === selectedMenu.value)[0];
    console.log(selectedCountry);
    let countryDetails = `<img src="${selectedCountry.flags.svg}">` +
        `<h1>${selectedCountry.name.common}</h1><hr>` +
        `<h2>Region: ${selectedCountry.region}</h2>` +
        `<h3>Subregion: ${selectedCountry.subregion}</h3>` +
        `<h4>Capital: ${selectedCountry.capital[0]}</h4>`;
    countryDetailsContainer.innerHTML = countryDetails;
});

let neighbourPopulation = document.getElementById("population");
neighbourPopulation.addEventListener("click", function () {
    if (countryDetailsContainer.innerHTML !== "<strong>Select country from the list!</strong>") {
        let neighbours = selectedCountry.borders;
        selectedCountry = countries.filter(x => neighbours.includes(x.cca3)).sort((a, b) => b.population - a.population)[0];
        let countryDetails = `<img src="${selectedCountry.flags.svg}">` +
            `<h1>${selectedCountry.name.common}</h1><hr>` +
            `<h2>Region: ${selectedCountry.region}</h2>` +
            `<h3>Subregion: ${selectedCountry.subregion}</h3>` +
            `<h4>Capital: ${selectedCountry.capital[0]}</h4>`;
        countryDetailsContainer.innerHTML = countryDetails;
    } else {
        countryDetailsContainer.innerHTML = "<strong>PICK COUNTRY!</strong>"
    }
})
let neighbourArea = document.getElementById("area");
neighbourArea.addEventListener("click", function () {
    if (countryDetailsContainer.innerHTML !== "<strong>Select country from the list!</strong>") {
        let neighbours = selectedCountry.borders;
        selectedCountry = countries.filter(x => neighbours.includes(x.cca3)).sort((a, b) => b.area - a.area)[0];
        let countryDetails = `<img src="${selectedCountry.flags.svg}">` +
            `<h1>${selectedCountry.name.common}</h1><hr>` +
            `<h2>Region: ${selectedCountry.region}</h2>` +
            `<h3>Subregion: ${selectedCountry.subregion}</h3>` +
            `<h4>Capital: ${selectedCountry.capital[0]}</h4>`;
        countryDetailsContainer.innerHTML = countryDetails;
    } else {
        countryDetailsContainer.innerHTML = "<strong>PICK COUNTRY!</strong>"
    }
});

//show previous country
let leftArrow = document.getElementById("previous");
leftArrow.addEventListener("click", function () {
    if (countryDetailsContainer.innerHTML !== "<strong>Select country from the list!</strong>") {
        if (selectedCountry !== countries[0]) {
            selectedCountry = countries[countries.indexOf(selectedCountry) - 1];
        } else {
            selectedCountry = countries[countries.length-1];
        };
        let countryDetails = `<img src="${selectedCountry.flags.svg}">` +
            `<h1>${selectedCountry.name.common}</h1><hr>` +
            `<h2>Region: ${selectedCountry.region}</h2>` +
            `<h3>Subregion: ${selectedCountry.subregion}</h3>` +
            `<h4>Capital: ${selectedCountry.capital[0]}</h4>`;
        countryDetailsContainer.innerHTML = countryDetails;
    } else {
        countryDetailsContainer.innerHTML = "<strong>PICK COUNTRY!</strong>"
    }
});

//show next country
let rightArrow = document.getElementById("after");
rightArrow.addEventListener("click", function () {
    if (countryDetailsContainer.innerHTML !== "<strong>Select country from the list!</strong>") {
        if (selectedCountry !== countries[countries.length-1]) {
            selectedCountry = countries[countries.indexOf(selectedCountry) + 1];
        } else {
            selectedCountry = countries[0];
        };
        let countryDetails = `<img src="${selectedCountry.flags.svg}">` +
            `<h1>${selectedCountry.name.common}</h1><hr>` +
            `<h2>Region: ${selectedCountry.region}</h2>` +
            `<h3>Subregion: ${selectedCountry.subregion}</h3>` +
            `<h4>Capital: ${selectedCountry.capital[0]}</h4>`;
        countryDetailsContainer.innerHTML = countryDetails;
    } else {
        countryDetailsContainer.innerHTML = "<strong>PICK COUNTRY!</strong>"
    }
})


