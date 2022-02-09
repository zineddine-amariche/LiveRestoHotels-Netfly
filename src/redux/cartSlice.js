import {createSlice} from "@reduxjs/toolkit"


const INITIAL_STATE = {
    carteItem :[],
    carteTotaleQuantity : 0 ,
    carteTotaleAmount : 0
}

const carteSlice = createSlice({
    name:'catr',
    INITIAL_STATE,
    reducers:{
        addToCart(state, action){
            state.carteItem.push(action.payload);
        }
    }
})
export const {addToCart} = carteSlice.actions

export default carteSlice.reducer