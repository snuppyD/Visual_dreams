import { configureStore } from '@reduxjs/toolkit'
import dreamReducer from './dream/dreamSlice'
import dreamsReducer from './dreams/dreamsSlice'

export const store = configureStore({
  reducer: {
    dreams: dreamsReducer,
    dream: dreamReducer,
  },
})
