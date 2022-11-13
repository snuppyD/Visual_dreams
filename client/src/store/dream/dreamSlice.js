import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import dreamsService from '../services/dreamsService'

export const getDream = createAsyncThunk('GET_DREAM', async (id, thunkAPI) => {
  try {
    return await dreamsService.getDream(id)
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data)
  }
})

export const createDream = createAsyncThunk('CREATE_DREAM', async (dreamData, thunkAPI) => {
  try {
    return await dreamsService.createDream(dreamData)
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data)
  }
})

export const deleteDream = createAsyncThunk('DELETE_DREAM', async (id, thunkAPI) => {
  try {
    return await dreamsService.deleteDream(id)
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data)
  }
})

export const updateDream = createAsyncThunk('UPDATE_DREAM', async (id, dreamData, thunkAPI) => {
  try {
    return await dreamsService.updateDream(id, dreamData)
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data)
  }
})

const dreamSlice = createSlice({
  name: 'dream',
  initialState: {
    dream: null,
    isError: false,
    isLoading: false,
    message: '',
    errors: null,
  },
  reducers: {
    resetDreamErrors: state => {
      state.errors = null
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getDream.pending, state => {
        state.isLoading = true
      })
      .addCase(getDream.fulfilled, (state, action) => {
        state.isLoading = false
        state.dream = action.payload[0]
      })
      .addCase(getDream.rejected, (state, action) => {
        state.isError = true
        state.isLoading = false
        state.message = action.payload.message
        state.dream = null
      })
      .addCase(createDream.pending, state => {
        state.isLoading = true
        state.errors = null
      })
      .addCase(createDream.fulfilled, (state, action) => {
        state.isLoading = false
        state.errors = null
      })
      .addCase(createDream.rejected, (state, action) => {
        state.isError = true
        state.isLoading = false
        state.errors = action.payload
      })
      .addCase(deleteDream.pending, state => {
        state.isLoading = true
        state.errors = null
      })
      .addCase(deleteDream.fulfilled, (state, action) => {
        state.isLoading = false
        state.errors = null
      })
      .addCase(deleteDream.rejected, (state, action) => {
        state.isError = true
        state.isLoading = false
        state.errors = action.payload
      })
      .addCase(updateDream.pending, state => {
        state.isLoading = true
        state.errors = null
      })
      .addCase(updateDream.fulfilled, (state, action) => {
        state.isLoading = false
        state.errors = null
      })
      .addCase(updateDream.rejected, (state, action) => {
        state.isError = true
        state.isLoading = false
        state.errors = action.payload
      })
  },
})

export const { resetDreamErrors } = dreamSlice.actions
export default dreamSlice.reducer
