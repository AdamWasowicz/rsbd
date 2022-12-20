import { configureStore } from '@reduxjs/toolkit';
import { enableMapSet } from 'immer';

//Reducers
import appReducer from './features/app-slice';

enableMapSet();

//Store
export const store = configureStore({
    reducer: {
        app: appReducer,
    }
})


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;