import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//Types
import { Currencies } from "../bitcoinTypes";

type AppState = {
    currency: Currencies;
};

const initialState: AppState = {
    currency: Currencies.USD
};

export const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        changeCurrency: (state, action: PayloadAction<Currencies>) => {
            state.currency = action.payload
        }
    }
});

export const { changeCurrency } = appSlice.actions;

export default appSlice.reducer;