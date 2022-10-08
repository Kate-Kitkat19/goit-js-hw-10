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
  const languagesList = languages.map(language => language.name).join(', ');
  return `<div class="info-container">
  <img src="${flags.svg}" class="flag-svg" width="60" height="30" alt='${name}'/>
      <h2 class="country-name">${name}</h2></div>
      <ul class="country-list">
        <li><span class="info-title">Capital: </span>${capital}</li>
        <li><span class="info-title">Population: </span>${population}</li>
        <li><span class="info-title">Languages: </span>${languagesList}</li>
      </ul>`;
}

function clearHTML() {
  countriesListRef.innerHTML = '';
  countryRef.innerHTML = '';
}

export { renderMarkupList, renderMarkupCountry, clearHTML };
