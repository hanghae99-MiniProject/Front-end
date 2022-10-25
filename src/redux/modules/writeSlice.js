import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
//http://week3-board.herokuapp.com/review/

//http://43.201.55.251:8080/api/reviews/
export const getMoviesWriteThunk = createAsyncThunk(
  'GET_MOVIES',
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `http://43.201.55.251:8080/api/reviews/${payload}`
      );

      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addMoviesWriteThunk = createAsyncThunk(
  'ADD_MOVIES',
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.post(
        'http://43.201.55.251:8080/api/reviews/',
        payload
      );

      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateMoviesWriteThunk = createAsyncThunk(
  'PATCH_MOVIES',
  async (payload, thunkAPI) => {
    try {
      const data = await axios.patch(
        `http://43.201.55.251:8080/api/reviews/${payload.id}`,
        payload
      );
      console.log(data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteMoviesWriteThunk = createAsyncThunk(
  'DELETE_MOVIES',
  async (payload, thunkAPI) => {
    try {
      await axios.delete(`http://43.201.55.251:8080/api/reviews/${payload}`);
      return thunkAPI.fulfillWithValue(payload);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.code);
    }
  }
);

const initialState = {
  searchMovies: [],
  isLoading: false,
  error: null,
};

const writeSlice = createSlice({
  name: 'writeSlice',
  initialState,
  reducers: {},
  extraReducers: {
    //get
    [getMoviesWriteThunk.pending]: (state) => {
      state.isLoading = true;
    },
    [getMoviesWriteThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.searchMovies = action.payload;
    },
    [getMoviesWriteThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    //add
    [addMoviesWriteThunk.pending]: (state) => {
      state.isLoading = true;
    },
    [addMoviesWriteThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.searchMovies.push(action.payload);
    },
    [addMoviesWriteThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    //patch
    [updateMoviesWriteThunk.pending]: (state) => {
      state.isLoading = true;
    },
    [updateMoviesWriteThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.searchMovies = action.payload;
    },
    [updateMoviesWriteThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    //delete
    [deleteMoviesWriteThunk.fulfilled]: (state, action) => {
      console.log(state, action);
      const target = state.searchMovies.findIndex(
        (data) => data.id === action.payload
      );
      state.searchMovies.splice(target, 1, action.payload);
      console.log(action.payload);
    },
    [deleteMoviesWriteThunk.pending]: (state) => {
      state.isLoading = true;
    },
    [deleteMoviesWriteThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {} = writeSlice.actions;
export default writeSlice.reducer;
