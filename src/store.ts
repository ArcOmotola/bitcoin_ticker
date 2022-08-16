import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

//slice reducers
import appReducer from "./features/appSlice";
import { bitcoinApi } from "./services/app";

export const store = configureStore({
    reducer: {
        [bitcoinApi.reducerPath]: bitcoinApi.reducer,
        app: appReducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(bitcoinApi.middleware)
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;