import './css/styles.css';
import debounce from 'lodash.debounce';
import { fetchCountries } from './js/fetchCountries';
import { inputRef, countriesListRef, countryRef } from './js/refs';
import {
  renderMarkupList,
  renderMarkupCountry,
  clearHTML,
} from './js/renderDOM';
import { notifyTooMuchCountries } from './js/notification';

const DEBOUNCE_DELAY = 300;

inputRef.addEventListener('input', debounce(onInputChange, DEBOUNCE_DELAY));

function onInputChange(e) {
  const query = e.target.value.trim().toLowerCase();

  if (!query) {
    clearHTML();
    return;
  }

  fetchCountries(query)
    .then(data => {
      if (data.length > 10) {
        notifyTooMuchCountries();
        return;
      }
      if (data.length >= 2 && data.length <= 10) {
        clearHTML();
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


