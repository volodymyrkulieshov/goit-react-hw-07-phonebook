import { createSlice } from '@reduxjs/toolkit';

const initialFilterState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialFilterState,
  reducers: {
    changeFilter(state, action) {
      return action.payload;
    },
  },
});

export const { changeFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
// -----------------------------------------
// const { createSlice } = '@reduxjs/toolkit';

// const initialFilterState = '';
// const filterSlice = createSlice({
//   name: 'filter',
//   initialFilterState,
//   reducers: {
//     changeFilter(state, action) {
//       console.log(action.payload);
//       return (state = action.payload);
//     },
//   },
// });
// export const filterReducer = filterSlice.reducer;
// export const { changeFilter } = filterSlice.action;
