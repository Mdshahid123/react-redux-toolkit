import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../redux/counter/counterSlice'
import themeReducer from "../redux/theme/themeSlice"

export const store = configureStore({
  reducer: {
    counter:counterReducer,
    theme:themeReducer,
  },
})
