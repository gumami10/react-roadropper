import { BehaviorSubject } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import userService from 'services/userService';

import api from './api';

const roadrops$ = new BehaviorSubject([]);
const roadrop$ = new BehaviorSubject({
  title: '',
  subject: '',
  target: '',
  content: '<p>Manda bala no seu conteúdo aqui! :)</p>',
  links: ''
});
const loading$ = new BehaviorSubject(false);

const getModel = () => roadrop$.asObservable();

const create = (roadrop = roadrop$.value) => {
  loading$.next(true);
  return api.post('roadrops', { ...roadrop }, userService.getStaticValue()).pipe(finalize(() => loading$.next(false)));
};

const list = () => {
  loading$.next(true);
  return api.get('roadrops').pipe(
    tap(roadrops => {
      roadrops$.next(roadrops);
    }),
    finalize(() => loading$.next(false))
  );
};

const show = id => {
  loading$.next(true);
  return api.get(`roadrops/${id}`).pipe(
    tap(roadrop => roadrop$.next(roadrop)),
    finalize(() => loading$.next(false))
  );
};

const edit = (roadrop, id) => {
  loading$.next(true);
  return api.put(`roadrops/${id}`, { roadrop }).pipe(
    tap(roadrop => roadrop$.next(roadrop)),
    finalize(() => loading$.next(false))
  );
};

const exclude = id => {
  loading$.next(true);
  return api.delete(`roadrops/${id}`).pipe(
    tap(roadrop => roadrop$.next(roadrop)),
    finalize(() => loading$.next(false))
  );
};

const updateModel = value => {
  roadrop$.next(value);
};

const getRoadropList = () => roadrops$.asObservable();

const loading = () => loading$.asObservable();

export { create, list, show, edit, exclude, updateModel, getModel, getRoadropList, loading };
