import { Notify } from 'notiflix/build/notiflix-notify-aio';

export function notifyTooMuchCountries() {
  Notify.info('Too many matches found. Please enter a more specific name.');
}
