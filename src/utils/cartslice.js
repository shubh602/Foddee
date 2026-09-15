import { createSlice } from "@reduxjs/toolkit";


const savedCart=localStorage.getItem('cart')

const cart=createSlice({
    name:"cart",
    initialState:{
        // items:[]
        items:savedCart?JSON.parse(savedCart):[]
    },
    reducers:{
        addCart:(state,action)=>{
            state.items.push(action.payload)
        },
        removeCart:(state,action)=>{
            console.log(action.payload);
            
            state.items=state.items.filter(item => item.id !== action.payload)
        },
        clearCart:(state,action)=>{
            state.items.length=0
        }
    },

})

export const {addCart,removeCart,clearCart} =cart.actions
export default cart.reducer;