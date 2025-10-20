// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './redux/reducers'; // Tu combinador de reducers

// Configuración del store
const store = configureStore({
  reducer: rootReducer, // Combina todos tus reducers
  devTools: process.env.NODE_ENV !== 'production', // Habilita DevTools solo en desarrollo
  // middleware por defecto ya incluye thunk
});

export default store;
