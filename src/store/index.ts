import { configureStore, createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
  name: 'todo',
  initialState: ['fazer café', 'estudar reduce', 'Estudar mais'],
  reducers: {},
})
export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
  },
})
