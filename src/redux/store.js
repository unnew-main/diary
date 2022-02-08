import {configureStore} from '@reduxjs/toolkit';
import DiaryReducer from './diaryReducers';
import SettingReducer from './settingReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  DiaryReducer,
  SettingReducer,
});

export default store = configureStore({reducer: rootReducer});
