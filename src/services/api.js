import axios from 'axios';
import { from, of } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';

const API_URL = 'http://localhost:3333';

const get = url => {
  return request('GET', url);
};

const post = (url, data) => {
  return request('POST', url, {
    data
  });
};

const exclude = url => {
  return request('DELETE', url);
};

const request = (method, url, options = {}) => {
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
};

const api = { get, post, exclude, request };

export default api;
