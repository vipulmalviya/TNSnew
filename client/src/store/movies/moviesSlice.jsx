import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchMovies } from '../../utils/api';

const initialState = {
  value: [],
  loading: false,
  error: null,
};

export const getMovies = createAsyncThunk('movies/getMovies', async () => {
  const response = await fetchMovies("/api/movies");
  return response;
});

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(getMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.value = action.payload;
      })
      .addCase(getMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});



export default moviesSlice.reducer;
