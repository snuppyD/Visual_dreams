import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import dreamsService from '../services/dreamsService'

export const getDreams = createAsyncThunk('GET_DREAMS', async (_, thunkAPI) => {
  try {
    return await dreamsService.getDreams()
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.response.data)
  }
})

const dreamsSlice = createSlice({
  name: 'dreams',
  initialState: {
    dreams: null,
    isError: false,
    isLoading: false,
    message: '',
  },
  reducers: {
    resetDreamErrors: state => {
      state.isError = false;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getDreams.pending, state => {
        state.isLoading = true
      })
      .addCase(getDreams.fulfilled, (state, action) => {
        state.isLoading = false
        state.dreams = action.payload
      })
      .addCase(getDreams.rejected, (state, action) => {
        state.isError = true
        state.isLoading = false
        // state.message = action.payload.message
        state.dreams = null
      })
  },
})

export default dreamsSlice.reducer
