const filters = '?fields=name,capital,population,flags.svg,languages';
import { Notify } from 'notiflix';
export function fetchCountries(name) {
  fetch(`https://restcountries.com/v2/name/${name}${filters}`)
    .then(response => {
      if (!response.ok) {
        Notify.failure('Oops, there is no country with that name');
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => console.log(data))
    .catch(err => console.log(err));
}
