import { BehaviorSubject, of } from 'rxjs';
import { filter, finalize, switchMap, tap } from 'rxjs/operators';
import api from 'services/api';

const user$ = new BehaviorSubject(null);
const loading$ = new BehaviorSubject(false);

const getStatus = () => {
  return of(window.localStorage.getItem('user')).pipe(
    filter(data => !!data),
    tap(data => user$.next(JSON.parse(data)))
  );
};

const login = ({ email, password }) => {
  loading$.next(true);
  return api
    .post('/users/login', {
      email: email,
      password: password
    })
    .pipe(
      tap(data => user$.next({ ...data.user, ...data.token })),
      tap(data => window.localStorage.setItem('user', JSON.stringify({ ...data.user, ...data.token }))),
      finalize(() => loading$.next(false))
    );
};

const register = ({ username, email, password, description }) => {
  loading$.next(true);
  return api
    .post('/users', {
      username: username,
      email: email,
      password: password,
      description: description
    })
    .pipe(
      tap(data => user$.next(data.user)),
      finalize(() => loading$.next(true))
    );
};

const logout = () => {
  return user$.pipe(
    filter(user => !!user),
    tap(() => window.localStorage.removeItem('user')),
    tap(() => user$.next(null)),
    switchMap(() => user$.asObservable())
  );
};

const getUser = () => {
  console.log(user$.value);
  return user$.asObservable();
};

const loading = () => loading$.asObservable();

const getStaticValue = () => user$.value;

const userService = { getUser, login, register, logout, loading, getStaticValue, getStatus };

export default userService;
