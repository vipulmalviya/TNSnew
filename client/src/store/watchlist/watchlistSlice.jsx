import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FetchWatchlist, DeleteWatchlist } from "../../utils/api"; 



export const getWatchlist = createAsyncThunk('watchlist/getWatchlist', async () => {
    const response = await FetchWatchlist("/watchlist-get");
    return response;
});

export const deleteWatchList = createAsyncThunk('watchlist/deleteWatchList', async (id) => {
    await DeleteWatchlist(id);
    return id;
});


const watchlistSlice = createSlice({
    name: 'watchlist',
    initialState: {
        value: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getWatchlist.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getWatchlist.fulfilled, (state, action) => {
                state.loading = false;
                state.value = action.payload;
            })
            .addCase(getWatchlist.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(deleteWatchList.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteWatchList.fulfilled, (state,action) => {
                state.loading = false;
                state.value = state.value.filter(item => item._id !== action.payload);
            })
            .addCase(deleteWatchList.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default watchlistSlice.reducer;
