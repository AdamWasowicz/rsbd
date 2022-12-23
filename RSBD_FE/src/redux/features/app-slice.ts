import { createSlice, PayloadAction } from '@reduxjs/toolkit';


export interface AppState {
    isLoading: boolean;
}

const initialState: AppState = {
    isLoading: false,
}

const AppSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setIsLoading(state: AppState, action: PayloadAction<boolean>) {
            state.isLoading = action.payload;
        },
    }
})

export const {
    setIsLoading,
} = AppSlice.actions;


export default AppSlice.reducer;