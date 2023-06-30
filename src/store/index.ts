import { configureStore, createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
  name: 'todo',
  initialState: ['fazer café', 'estudar reduce', 'Estudar mais'],
  reducers: {
    add: (state, action) => {
      console.log(action)
      state.push(action.payload)
    },
  },
})
export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
  },
})

export const { add } = todoSlice.actions
