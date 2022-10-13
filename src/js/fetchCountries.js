const filters = '?fields=name,capital,population,flags,languages';
import { Notify } from 'notiflix';
export async function fetchCountries(name) {
  return await fetch(`https://restcountries.com/v2/name/${name}${filters}`).then(
    response => {
      if (!response.ok) {
        Notify.failure('Oops, there is no country with that name');
        throw new Error(response.status);
      }
      return response.json();
    }
  );
}
