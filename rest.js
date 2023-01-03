const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => getCountries(data))
}

const getCountries = (countries) => {
    countries.map(country => showCountry(country))
}
const showCountry = (country) => {
    const { name } = country;
    const container = document.getElementById('container');

    container.innerHTML =
        `
    <div>
    <h2>name:${name.common}</h2>
    </div>
    `
}

loadCountries();

























// const loadCountries = () => {
//     fetch('https://restcountries.com/v3.1/all')
//         .then(res => res.json())
//         .then(data => displayCountries(data))
// }

// const displayCountries = (countries) => {
//     console.log(countries)
//     const allCountries = countries.map(country =>
//         `<div>
//         <h3>amr sonar bangla</h3>
//             <h2>${country.name.common}</h2>
//         </div>`
//     );
//     // console.log(allCountries)
//     const container = document.getElementById('container');

//     container.innerHTML = (allCountries).join(' ');
// }

// // const getAllCountries = country => {
// //     return `
// //       <div>
// //       <h2>${country.name.common}</h2>
// //       </div>
// //     `
// // }

// loadCountries();