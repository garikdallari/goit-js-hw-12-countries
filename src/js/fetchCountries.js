export default function fetchCountries(searchQuery) {
    return fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}?fields=name;capital;population;flag;languages`)
        .then(res => res.json())
        .then(data => data)
        .catch(error => console.log('Something goes wrong'));
};