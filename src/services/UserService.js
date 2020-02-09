import axios from 'axios';

import storage from './localStorageService';
import { store } from './store';

class UserService {
  initialState = {
    user: null,
    loading: false,
    token: null
  };

  constructor() {
    const pqp = new store(this.initialState);
    this.state$ = pqp.state$;
    this.setState = pqp.setState;
    const token = storage.getItem('token');
    if (token) {
      this.setState(token);
    }
  }

  login = async user => {
    this.setState({
      loading: true
    });

    try {
      const response = await axios.post('http://localhost:3333/users/login', {
        email: user.email,
        password: user.password
      });
      this.setState({
        token: response.data.token,
        name: response.data.name
      });
      storage.setItem('token', response.data.token);
      storage.setItem('name', response.data.token);
    } catch {
      console.log('erro');
    }

    this.setState({
      loading: false
    });
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
