import { createSlice } from '@reduxjs/toolkit';

console.log('testSlice.ts');
export const testSlice = createSlice({
  name: 'test',
  initialState: {
    user: null,
    token: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { login, logout } = testSlice.actions;
export default testSlice.reducer;
