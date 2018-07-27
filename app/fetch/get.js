import 'whatwg-fetch'
import 'es6-promise'

export default function get(url) {
  let result = fetch(url, {
      credentials: 'include',
      headers: {
          'Accept': 'application/json'
      }
  });

  return result;
}
