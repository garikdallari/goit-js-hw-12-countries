export default function fetchCountries(searchQuery) {
  return fetch(
    `https://restcountries.eu/rest/v2/name/${searchQuery}?fields=name;population;flag;languages;capital`,
  )
    .then(res => res.json())
    .catch(error => error);
  // .then(res => {
  //     if (res.ok) return res.json();
  //         throw new Error('Error fetching data')
  // })
  // .catch(error => {
  //     console.error('Error: ', error)
  // });
}
