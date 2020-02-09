import axios from 'axios';
import api from 'services/Api';

import storage from './localStorageService';
import { store } from './store';

class UserService {
  initialState = {
    user: null,
    loading: false,
    token: null,
    description: ''
  };

  constructor() {
    const pqp = new store(this.initialState);
    this.state$ = pqp.state$;
    this.setState = pqp.setState;
    const token = storage.getItem('token');
    if (token) {
      this.setState(token);
    }
    const name = storage.getItem('name');
    this.setState({ user: { name } });
  }

  login = async user => {
    try {
      api
        .post('/users/login', {
          email: user.email,
          password: user.password
        })
        .subscribe(res => this.setState({ token: res.token, user: res.user }));
    } catch (e) {
      console.log('erro', e);
    }
  };

  createUser = async user => {
    await storage.clear('token', '');

    this.setState({
      loading: true
    });

    try {
      const response = await axios.post('http://localhost:3333/users', {
        username: user.username,
        email: user.email,
        password: user.password
      });
      this.setState({ token: response.data.token });
      storage.setItem('token', response.data.token);
      storage.setItem('name', user.username);
    } catch {
      console.log('erro');
    }

    this.setState({
      user: { ...user, password: null },
      loading: false
    });
  };

  getState = () => this.state$.asObservable();
}
const userService = new UserService();
export default userService;
