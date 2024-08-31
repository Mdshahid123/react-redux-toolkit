import { createSlice } from '@reduxjs/toolkit'

const initialStateValue= {
  colour:"",
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState:initialStateValue,
  reducers: {
         
        ChangeTextColour: (state, action) => {
      state.colour = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { ChangeTextColour  } = themeSlice.actions

export default themeSlice.reducer