import './css/styles.css';
import debounce from 'lodash.debounce';
import { fetchCountries } from './fetchCountries';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const DEBOUNCE_DELAY = 300;
const inputRef = document.querySelector('input#search-box');
const countriesListRef = document.querySelector('ul.country-list');
const countryRef = document.querySelector('div.country-info');
const debouncedSearch = debounce(onInputChange, DEBOUNCE_DELAY);

inputRef.addEventListener('input', debouncedSearch);

function onInputChange(e) {
  const query = e.currentTarget.value;
  console.log('onInputChange   query', query);
  const structuredQuery = query.trim().toLowerCase();
  console.log(structuredQuery);
  fetchCountries(structuredQuery)
    .then(data => {
      if (data.length > 10) {
        notifyTooMuchCountries();
      }
      data.forEach(country => {
        console.log(country.name);
        console.log(country.capital);
        console.log(country.population);
        console.log(country.flags);
        console.log(country.languages);
      });
    })
    .catch(err => console.log(err));
}

function notifyTooMuchCountries() {
  Notify.info('Too many matches found. Please enter a more specific name.');
}
