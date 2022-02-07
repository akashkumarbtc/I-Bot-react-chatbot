import { createSlice } from '@reduxjs/toolkit'

export const formIdSlice = createSlice({
  name: 'formId',
  initialState: {
    value: 0,
  },
  reducers: {
    setFormId: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { setFormId } = formIdSlice.actions

export default formIdSlice.reducer