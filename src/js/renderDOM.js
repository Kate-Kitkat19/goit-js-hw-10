import { countriesListRef, countryRef } from './refs';

function renderMarkupList(list) {
  return list
    .map(country => {
      const { name, flags } = country;
      return `<li class="list-item">
        <img src="${flags.svg}" class="flag-svg" width="60" height="30" alt="${name}">
          <p class="item-text">${name}</p>
        </img>
      </li>`;
    })
    .join('');
}

function renderMarkupCountry(country) {
  const { name, capital, flags, languages, population } = country;
  const languagesList = [];
  for (const language of languages) {
    languagesList.push(language.name);
  }
  return `<img src="${flags.svg}" class="flag-svg" width="60" height="30" alt='${name}'/>
      <h2>${name}</h2>
      <ul class="country-list">
        <li>Capital: <span>${capital}</span></li>
        <li>Population: <span>${population}</span></li>
        <li>Languages: <span>${languagesList}</span></li>
      </ul>`;
}

function clearHTML() {
  countriesListRef.innerHTML = '';
  countryRef.innerHTML = '';
}

export { renderMarkupList, renderMarkupCountry, clearHTML };
