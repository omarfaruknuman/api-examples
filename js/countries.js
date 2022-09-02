
// Arrow function
const loadcountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}

const displayCountries = countries =>{
    const countriesContainer = document.getElementById('countries-container');
    for(const country of countries){
        // console.log(country)
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('list-country')
        countryDiv.innerHTML = `
            <h3>Common Country Name: ${country.name.common}</h3>
            <p>Official Name: ${country.name.official}</p>
            <p>Population: ${country.population}</p>
            <p>Capital: ${country.capital ? country.capital[0]: 'No Capital'}</p>
            <button onclick="loadCountryDetail('${country.cca2}')">Details</button>
        
        `;
        countriesContainer.appendChild(countryDiv);
    }
}

// Arrow function
const loadCountryDetail = (code) => {
    // https://restcountries.com/v3.1/alpha/{code}
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    // console.log('Get country Detail',code)
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetail(data[0]))
}

const displayCountryDetail = country =>{
    console.log(country)
    const countryDetail = document.getElementById('country-detail')
    countryDetail.innerHTML = `
        <h2>Details: ${country.name.common}</h2>
        <img src=${country.flags.png}>
    `
}

/* const displayCountries1 = countries =>{
    const countriesContainer = document.getElementById('countries-container');
    countries.forEach(country =>{
        console.log(country)
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('list-country')
        countryDiv.innerHTML = `
            <h3>Common Country Name: ${country.name.common}</h3>
            <p>Official Name: ${country.name.official}</p>
            <p>Population: ${country.population}</p>
        
        `;
        countriesContainer.appendChild(countryDiv);
    })
} */
loadcountries();

// Array = []
// Object = {}
// Array of Object [{},{},{},....]