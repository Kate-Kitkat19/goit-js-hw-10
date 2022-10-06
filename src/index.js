import './css/styles.css';
import debounce from 'lodash.debounce';
import { fetchCountries } from './js/fetchCountries';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { inputRef, countriesListRef, countryRef } from './js/refs';
import {
  renderMarkupList,
  renderMarkupCountry,
  clearHTML,
} from './js/renderDOM';

const DEBOUNCE_DELAY = 300;
const debouncedSearch = debounce(onInputChange, DEBOUNCE_DELAY);

inputRef.addEventListener('input', onInputChange);

function onInputChange(e) {
  const query = e.currentTarget.value;
  if (!query) {
    clearHTML();
    return;
  }
  const structuredQuery = query.trim().toLowerCase();
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
      if (data.length === 1) {
        clearHTML();
        const markupForCountry = renderMarkupCountry(data[0]);
        countryRef.insertAdjacentHTML('beforeend', markupForCountry);
      }
    })
    .catch(err => console.log(err));
}

function notifyTooMuchCountries() {
  Notify.info('Too many matches found. Please enter a more specific name.');
}
