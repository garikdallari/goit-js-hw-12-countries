import getRefs from "./js/country-refs";
import fetchCountries from './js/fetchCountries';
import countryCardTpl from './templates/country-card.hbs';
import countryListTpl from './templates/country-list.hbs';
import Notiflix from "notiflix";
import debounce from 'lodash.debounce'

const refs = getRefs();
const DEBOUNCE_DELAY = 300;





refs.inputRef.addEventListener('input', debounce(onCountrySearch, DEBOUNCE_DELAY));

function onCountrySearch(e) {
    e.preventDefault();
    const searchQuery = e.target.value;
    
    fetchCountries(searchQuery).then(updateCountryList)
}


function updateCountryList(data) {
    const renderCountryList = countryListTpl(data);
    clearData()
    
    renderCountryCard(data);

    if (data.length >= 2 && data.length <= 10) {
        clearData()
        refs.countryListContainer.innerHTML = renderCountryList;
        return;
    };
    
    if (data.length > 10) {
        clearData()
        Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
        return;
    };

    if (data.status === 404) {
        clearData()
        Notiflix.Notify.failure('Oops, there is no country with that name');
        return;

    };
}

function renderCountryCard(country) {
    const countryMarkup = countryCardTpl(country);
    refs.countryContainer.innerHTML = countryMarkup;
};

function clearData() {
    refs.countryListContainer.innerHTML = '';
    refs.countryContainer.innerHTML = '';
}




   