/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { ILogin, IRegister } from '@my-workspace/utils';
import { environment } from './environments/environment';

export const authProvider = {
  login: async ({ email, password }: ILogin) => {
    try {
      const response = await axios.post<{ token: string }>(
        `${environment.AUTH_URL}/signin`,
        {
          email,
          password,
        }
      );
      if (response.status === 200) {
        localStorage.setItem(environment.TOKEN_KEY, response.data.token);
      }
      return Promise.resolve(response.data);
    } catch (error: any) {
      let errorMessage = '';
      if (error?.response.data.msg) {
        errorMessage = error.response.data.msg;
      } else if (error instanceof Error) {
        errorMessage = error.message;
      }
      return Promise.reject(errorMessage);
    }
  },
  register: async ({ name, email, password }: IRegister) => {
    try {
      await axios.post(`${environment.AUTH_URL}/signup`, {
        email,
        password,
        name,
      });
      return Promise.resolve();
    } catch (error: any) {
      let errorMessage = '';
      if (error?.response.data.msg) {
        errorMessage = error.response.data.msg;
      } else if (error instanceof Error) {
        errorMessage = error.message;
      }
      return Promise.reject(errorMessage);
    }
  },
  forgotPassword: ({ email }: { email: string }) => Promise.resolve(),
  updatePassword: ({ password }: { password: string }) => Promise.resolve(),
  logout: () => Promise.resolve(),
  checkAuth: () => {
    if (localStorage.getItem(environment.TOKEN_KEY)) {
      return Promise.resolve();
    }
    return Promise.reject();
  },
  checkError: (error: Error) => {
    if (error instanceof Error) {
      return Promise.reject(error.message);
    }
    return Promise.resolve();
  },
  getPermissions: () => Promise.resolve(),
  getUserIdentity: () => Promise.resolve(),
};
