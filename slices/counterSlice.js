import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  items:
  []
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state,action) => {
     state.items.map((item) =>{
    if(item.id===action.payload)
      {
        item.qty += 1
        item.price = item.qty * item.basePrice;
        // item.price=action.payload*item.qty
        console.log(action.payload)
        // console.log(item.id, action.payload);
      }
    })
    },
    decrement: (state,action) => {
     state.items.map((item) =>{
      
    if(item.id===action.payload)
      {
        item.qty -= 1
        item.price = item.qty * item.basePrice;

        // console.log(item.price);
      }
    })
    },
    incrementByAmount: (state, action) => {
      state.value += 1
      
      console.log(action.payload);

      if(!action?.payload?.basePrice){
        action.payload.basePrice = action.payload.price;
      }
      const new_items = [...state.items, action.payload]
      state.items=new_items;
      console.log(new_items);
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer