import {configureStore} from '@reduxjs/toolkit';
import DiaryReducer from './DiaryReducers';

export default store = configureStore({reducer: DiaryReducer});
