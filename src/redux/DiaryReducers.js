import {createSlice} from '@reduxjs/toolkit';
const diarySlice = createSlice({
  name: 'diary',
  initialState: [{nextId: 1}],
  reducers: {
    uploadDiary: (state, action) => {
      state.push({
        id: state[0].nextId,

        year: action.payload.year,
        month: action.payload.month,
        day: action.payload.day,
        hour: action.payload.hour,
        minute: action.payload.minute,

        content: action.payload.content,
      });
      state[0].nextId += 1;
    },
    deleteDiary: (state, action) => {
      return (state = state.filter(data => data.id !== action.payload.id));
    },
    modifyDiary: (state, action) => {
      state.push('modify');
    },
  },
});

export const {uploadDiary, deleteDiary, modifyDiary} = diarySlice.actions;
export const selectDiary = state => state;
export default diarySlice.reducer;
