import { configureStore, createSlice } from '@reduxjs/toolkit'
import { useSelector, TypedUseSelectorHook } from 'react-redux'

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

export type RootState = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
