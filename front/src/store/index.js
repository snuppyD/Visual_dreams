import { configureStore } from '@reduxjs/toolkit'
import dream from './dream/dreamSlice'
import dreams from './dreams/dreamsSlice'

export const store = configureStore({
  reducer: {
    dreams: dreams,
    dream: dream,
  },
})
