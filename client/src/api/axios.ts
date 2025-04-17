/* SETUP AXIOS AND DEFINE FUNCTIONS TO FETCH FROM API */
import axios from 'axios';

interface User {
  _id: string;
  name: string;
  email: string;
}

const api = axios.create({
  baseURL: 'http://localhost:4000',
  withCredentials: true,        // use cookies
});

// refresh access tokens when cookies expire
api.interceptors.response.use(
  res => res,
  async err => {
    const original = err.config;
    if (err.response?.status === 401 && !original._retry) {
      original._retry = true;
      await api.post('/api/auth/refresh-token');
      return api(original);
    }
    return Promise.reject(err);
  }
);

/* DEFINING FUNCTIONS TO FETCH FROM THE API */
export const fetchCurrentUser = async (): Promise<User | null> => {
  try {
    const res = await api.get('/api/user/me');
    return res.data;
  } catch (err: any) {
    if (err.response?.status === 401) {
      return null;
    }
    throw err;
  }
};

export const refreshToken = async (): Promise<void> => {
  await api.post('/api/auth/refresh-token');
};

export const signIn = async (email: string, password: string): Promise<void> => {
  await api.post('/api/auth/signin', { email, password });
};

export const signUp = async (name: string, email: string, password: string): Promise<void> => {
  await api.post('/api/auth/signup', { name, email, password });
};

export const signOut = async (): Promise<void> => {
  await api.post('/api/auth/signout');
};


export default api;
