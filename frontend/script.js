
let countriesList = "<option value='selected'>Select Country</option>";
countries.forEach(country => {
    countriesList += `<option value="${country.name.common}">${country.name.common}</option>`;
});
document.getElementById('all').innerHTML = countriesList;


let countryDetailsContainer = document.getElementById("country");
let selectedMenu = document.getElementById("all");
let selectedCountry;

function displayCountryDetails(country) {
    let countryDetails = `<img src="${country.flags.svg}">` +
        `<h1>${country.name.common}</h1><hr>` +
        `<h2>Region: ${country.region}</h2>` +
        `<h3>Subregion: ${country.subregion}</h3>` +
        `<h4>Capital: ${country.capital[0]}</h4>`;
    countryDetailsContainer.innerHTML = countryDetails;
}

selectedMenu.addEventListener("click", function () {
    if (selectedMenu.value !== "selected") {
        selectedCountry = countries.filter(x => x.name.common === selectedMenu.value)[0];
        displayCountryDetails(selectedCountry);
    } else {
        countryDetailsContainer.innerHTML = "<strong>Select country from the list!</strong>"
    }
});

let neighbourPopulation = document.getElementById("population");
neighbourPopulation.addEventListener("click", function () {
    if (countryDetailsContainer.innerHTML !== "<strong>Select country from the list!</strong>") {
        let neighbours = selectedCountry.borders;
        selectedCountry = countries.filter(x => neighbours.includes(x.cca3)).sort((a, b) => b.population - a.population)[0];
        displayCountryDetails(selectedCountry);
    } else {
        countryDetailsContainer.innerHTML = "<strong>Select country from the list!</strong>"
    }
})
let neighbourArea = document.getElementById("area");
neighbourArea.addEventListener("click", function () {
    if (countryDetailsContainer.innerHTML !== "<strong>Select country from the list!</strong>") {
        let neighbours = selectedCountry.borders;
        selectedCountry = countries.filter(x => neighbours.includes(x.cca3)).sort((a, b) => b.area - a.area)[0];
        displayCountryDetails(selectedCountry);
    } else {
        countryDetailsContainer.innerHTML = "<strong>Select country from the list!</strong>";
    }
});

//show previous country
let leftArrow = document.getElementById("previous");
leftArrow.addEventListener("click", function () {
    if (countryDetailsContainer.innerHTML !== "<strong>Select country from the list!</strong>") {
        if (selectedCountry !== countries[0]) {
            selectedCountry = countries[countries.indexOf(selectedCountry) - 1];
        } else {
            selectedCountry = countries[countries.length - 1];
        };
        displayCountryDetails(selectedCountry);
    } else {
        countryDetailsContainer.innerHTML = "<strong>Select country from the list!</strong>";
    }
});

//show next country
let rightArrow = document.getElementById("after");
rightArrow.addEventListener("click", function () {
    if (countryDetailsContainer.innerHTML !== "<strong>Select country from the list!</strong>") {
        if (selectedCountry !== countries[countries.length - 1]) {
            selectedCountry = countries[countries.indexOf(selectedCountry) + 1];
        } else {
            selectedCountry = countries[0];
        };
        displayCountryDetails(selectedCountry);
    } else {
        countryDetailsContainer.innerHTML = "<strong>Select country from the list!</strong>";
    }
})


