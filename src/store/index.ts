import { configureStore } from '@reduxjs/toolkit'
import { player } from '../store/slices/player'
import { useSelector, TypedUseSelectorHook, useDispatch } from 'react-redux'

export const store = configureStore({
  reducer: {
    player,
  },
})

export type AppDispatch = typeof store.dispatch

export type RootState = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch: () => AppDispatch = useDispatch
