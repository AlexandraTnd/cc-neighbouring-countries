
let countriesList = "";
countries.forEach(country => {
    countriesList += `<option value="${country.name.common}">${country.name.common}</option>`;
});
document.getElementById('all').innerHTML = countriesList;

