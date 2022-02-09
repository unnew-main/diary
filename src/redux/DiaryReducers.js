import {createSlice} from '@reduxjs/toolkit';

function makeid(length) {
  var result = '';
  var characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result.toString();
}

const diarySlice = createSlice({
  name: 'diary',
  initialState: [],
  reducers: {
    uploadDiary: (state, action) => {
      state.push({
        ...action.payload,
        id: makeid(10),
      });
      console.log('state', state);
    },
    deleteDiary: (state, action) => {
      return (state = state.filter(data => data.id !== action.payload.id));
    },
    // modifyDiary: (state, action) => {
    //   state.push('modify');
    // },
  },
});

export const {uploadDiary, deleteDiary} = diarySlice.actions;
export const selectDiary = state => state;
export default diarySlice.reducer;
