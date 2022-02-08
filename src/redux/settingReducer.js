import {createSlice} from '@reduxjs/toolkit';

const settingSlice = createSlice({
  name: 'setting',
  initialState: {firstDay: 0},
  reducers: {
    handleFirstDay: (state, action) => {
      state.firstDay = action.payload.firstDay === true ? 1 : 0;
    },
  },
});

export const {handleFirstDay} = settingSlice.actions;
export const selectSetting = state => state;
export default settingSlice.reducer;
