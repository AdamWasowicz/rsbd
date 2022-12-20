import { createSlice, PayloadAction } from '@reduxjs/toolkit';


export interface AppState {
}

const initialState: AppState = {
}

const expertSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        
    }
})

export const {
    
} = expertSlice.actions;


export default expertSlice.reducer;