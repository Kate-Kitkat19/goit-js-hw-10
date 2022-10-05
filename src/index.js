import './css/styles.css';
import debounce from 'lodash.debounce';
import { fetchCountries } from './fetchCountries';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const DEBOUNCE_DELAY = 300;
const inputRef = document.querySelector('input#search-box');

inputRef.addEventListener('input', onInputChange);
const debouncedSearch = debounce(fetchCountries, DEBOUNCE_DELAY);

function onInputChange(e) {
  const query = e.currentTarget.value;
  const structuredQuery = query.trim().toLowerCase();
  console.log(structuredQuery);
  debouncedSearch(structuredQuery);
}
