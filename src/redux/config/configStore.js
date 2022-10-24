import { configureStore } from '@reduxjs/toolkit';
import writeSlice from '../modules/writeSlice';

const store = configureStore({ reducer: { writeSlice } });

export default store;
