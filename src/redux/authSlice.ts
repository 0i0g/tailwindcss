import { createSlice } from '@reduxjs/toolkit';
import jwt_decode from 'jwt-decode';
import { AppUser } from 'src/@type/appUser';
import { assertAppUser } from './../@type/appUser';

let initialState = {
  user: null as AppUser | null,
  token: null as string | null,
};

try {
  const token = localStorage.getItem('token');
  if (token) {
    const user = jwt_decode(token);
    assertAppUser(user);
    initialState = { user, token };
  }
} catch (error) {
  initialState = { user: null, token: null };
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    logout: (state) => {
      localStorage.clear();
      state.user = null;
      state.token = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
