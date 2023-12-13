import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: ['1']
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            const itemToRemove = action.payload;
            const indexToRemove = state.items.findIndex(item => item.id === itemToRemove.id);

            if (indexToRemove !== -1) {
                state.items.splice(indexToRemove, 1);
            }
        },
        clearCart: (state, action) => {
            state.items.length = 0;
            // return { items: [] };
        }
    }
})

export const { addItem, removeItem, clearCart } = cartSlice.actions

export default cartSlice.reducer;