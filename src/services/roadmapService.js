import { BehaviorSubject } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';

import api from './api';

const roadmaps$ = new BehaviorSubject(null);
const roadmap$ = new BehaviorSubject(null);
const loading$ = new BehaviorSubject(false);

const create = roadmap => {
  loading$.next(true);
  return api.post('roadmaps', roadmap).pipe(finalize(() => loading$.next(false)));
};

const list = () => {
  loading$.next(true);
  return api.get('roadmaps').pipe(
    finalize(() => loading$.next(false)),
    tap(roadmaps => roadmaps$.next(roadmaps))
  );
};

const show = id => {
  loading$.next(true);
  return api.get(`roadmaps/${id}`).pipe(
    finalize(() => loading$.next(false)),
    tap(roadmap => roadmap$.next(roadmap))
  );
};

const edit = (roadmap, id) => {
  loading$.next(true);
  return api.put(`roadmaps/${id}`, { roadmap }).pipe(
    finalize(() => loading$.next(false)),
    tap(roadmap => roadmap$.next(roadmap))
  );
};

const exclude = id => {
  loading$.next(true);
  return api.delete(`roadmaps/${id}`).pipe(
    finalize(() => loading$.next(false)),
    tap(roadmap => roadmap$.next(roadmap))
  );
};

const getRoadmaps = () => roadmaps$.asObservable();

const getRoadmap = () => roadmap$.asObservable();

const loading = () => loading$.asObservable();

const roadmapService = { create, list, show, edit, exclude, getRoadmap, getRoadmaps, loading };

export default roadmapService;
