import axios from 'axios';
import { from, of } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';

const API_URL = 'http://localhost:3333';

class Api {
  get(url) {
    return this.request('GET', url);
  }

  post(url, data) {
    return this.request('POST', url, {
      data
    });
  }

  delete(url) {
    return this.request('DELETE', url);
  }

  request(method, url, options = {}) {
    return of(true).pipe(
      switchMap(() => {
        const promise = axios.request({
          method,
          baseURL: API_URL,
          url,
          data: options.data
        });

        return from(promise);
      }),
      map(result => result.data),
      tap(() => null, err => console.error(err))
    );
  }
}

const api = new Api(API_URL);

export default api;
