import './css/styles.css';
import debounce from 'lodash.debounce';
import { fetchCountries } from './fetchCountries';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const DEBOUNCE_DELAY = 300;
const inputRef = document.querySelector('input#search-box');
const countriesListRef = document.querySelector('ul.country-list');
const countryRef = document.querySelector('div.country-info');
const debouncedSearch = debounce(onInputChange, DEBOUNCE_DELAY);

inputRef.addEventListener('input', onInputChange);

function onInputChange(e) {
  const query = e.currentTarget.value;
  const structuredQuery = query.trim().toLowerCase();
  if (!structuredQuery) {
    clearHTML();
    return;
  }
  fetchCountries(structuredQuery)
    .then(data => {
      if (data.length > 10) {
        notifyTooMuchCountries();
        return;
      }
      if (data.length > 1) {
        const markupList = renderMarkupList(data);
        countriesListRef.insertAdjacentHTML('beforeend', markupList);
      }
    })
    .catch(err => console.log(err));
}

function notifyTooMuchCountries() {
  Notify.info('Too many matches found. Please enter a more specific name.');
}

function renderMarkupList(list) {
  return list
    .map(country => {
      const { name, flags } = country;
      return `<li class="list-item">
        <img src="${flags.svg}" class="flag-svg" width="60" alt="${name}">
          <p class="item-text">${name}</p>
        </img>
      </li>`;
    })
    .join('');
}

function clearHTML() {
  countriesListRef.innerHTML = '';
  countryRef.innerHTML = '';
}
