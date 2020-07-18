import { BehaviorSubject } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import userService from 'services/userService';

import api from './api';

const roadmaps$ = new BehaviorSubject([]);
const roadmap$ = new BehaviorSubject({
  title: '',
  subject: '',
  target: '',
  content: '<p>Manda bala no seu conteúdo aqui! :)</p>',
  links: ''
});
const loading$ = new BehaviorSubject(false);

const getModel = () => roadmap$.asObservable();

const create = (roadmap = roadmap$.value) => {
  loading$.next(true);
  return api.post('roadmaps', { ...roadmap }, userService.getStaticValue()).pipe(finalize(() => loading$.next(false)));
};

const list = () => {
  loading$.next(true);
  return api.get('roadmaps').pipe(
    tap(roadmaps => {
      roadmaps$.next(roadmaps);
    }),
    finalize(() => loading$.next(false))
  );
};

const show = id => {
  loading$.next(true);
  return api.get(`roadmaps/${id}`).pipe(
    tap(roadmap => roadmap$.next(roadmap)),
    finalize(() => loading$.next(false))
  );
};

const edit = (roadmap, id) => {
  loading$.next(true);
  return api.put(`roadmaps/${id}`, { roadmap }).pipe(
    tap(roadmap => roadmap$.next(roadmap)),
    finalize(() => loading$.next(false))
  );
};

const exclude = id => {
  loading$.next(true);
  return api.delete(`roadmaps/${id}`).pipe(
    tap(roadmap => roadmap$.next(roadmap)),
    finalize(() => loading$.next(false))
  );
};

const updateModel = value => {
  roadmap$.next(value);
};

const getRoadmapList = () => roadmaps$.asObservable();

const loading = () => loading$.asObservable();

export { create, list, show, edit, exclude, updateModel, getModel, getRoadmapList, loading };
