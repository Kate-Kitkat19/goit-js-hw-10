import './css/styles.css';
import debounce from 'lodash.debounce';
import { fetchCountries } from './fetchCountries';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
const BASE_URL = 'https://restcountries.com/v2/name/';
const filters = '?fields=name,capital,population,flags.svg,languages';

// function fetchCountries(name) {
//   fetch(`${BASE_URL}${name}${filters}`).then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   });
// }

const DEBOUNCE_DELAY = 300;
const inputRef = document.querySelector('input#search-box');

inputRef.addEventListener('input', onInputChange);

function onInputChange(e) {
  const query = e.currentTarget.value;
  const structuredQuery = query.trim().toLowerCase();
  console.log(structuredQuery);
  // fetchCountries(structuredQuery)
  //   .then(data => console.log(data))
  //   .catch(err => console.log(err));
}
