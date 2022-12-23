import { configureStore } from '@reduxjs/toolkit';
import { enableMapSet } from 'immer';

//Reducers
import appReducer from './features/app-slice';
import postReducer from './features/post-slice';

enableMapSet();

//Store
export const store = configureStore({
    reducer: {
        app: appReducer,
        post: postReducer,
    }
})


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;