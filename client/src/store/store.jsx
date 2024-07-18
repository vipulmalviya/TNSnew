import { configureStore } from '@reduxjs/toolkit'
import moviesReducer from './movies/moviesSlice'
import watchlistReducer from './watchlist/watchlistSlice'

export const store = configureStore({
    reducer: {
        movies: moviesReducer,
        watchlist: watchlistReducer,
    },
})
