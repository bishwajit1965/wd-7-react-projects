const loadCountries = async () => {
  try {
    const URL = "https://restcountries.com/v3.1/all";
    const response = await fetch(URL);
    const countries = await response.json();
    displayCountries(countries);
  } catch (error) {
    console.log(error);
  }
};

const displayCountries = (countries) => {
  console.log(countries[0]);
  const countryContainer = document.getElementById("countries");
  const allCountriesHTML = countries.map((country) => getCountryHTML(country));
  countryContainer.innerHTML = allCountriesHTML.join(" ");
};

const getCountryHTML = ({ name, flags, population }) => {
  return `
    <div class="country-div">
        <img src="${flags.png}" alt="country-flag" />
        <div class="data-container">
            <h4>Name: ${name.common}</h4>
            <p>Population: ${population}</p>
        </div>
    </div>
  `;
};

loadCountries();
