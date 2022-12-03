import { configureStore } from '@reduxjs/toolkit';
import modalReducer from '../redux/modalSlice';

export const store = configureStore({
  reducer: {
    //여기서 리듀서를 관리한다.
    modal: modalReducer,
  },
});
