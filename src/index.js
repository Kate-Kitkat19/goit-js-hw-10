import './css/styles.css';
import debounce from 'lodash.debounce';
import { fetchCountries } from './fetchCountries';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const filters = '?fields=name,capital,population,flags.svg,languages';
const DEBOUNCE_DELAY = 300;
const inputRef = document.querySelector('input#search-box');

inputRef.addEventListener('input', onInputChange);

function onInputChange(e) {
  const query = e.currentTarget.value;
  const structuredQuery = query.trim().toLowerCase();
  console.log(structuredQuery);
  fetch(`https://restcountries.com/v2/name/${structuredQuery}${filters}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Sorry, we coundn`t find your country');
      }
      return response.json();
    })
    .then(data => console.log(data))
    .catch(err => console.log(err));
}
