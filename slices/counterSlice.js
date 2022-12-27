import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  total: 0,
  items: [],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.total += Number(action.payload.var_price);
      state.items.map((item) => {
        if (item.id === action.payload.varid) {
          item.qty += 1;
          item.price = item.qty * item.basePrice;
          item.totPrice += item.price;
          // item.price=action.payload*item.qty
          // console.log(action.payload)
          // console.log(item.id, action.payload);
        }
      });
    },
    decrement: (state, action) => {
      state.total += Number(action.payload.var_price);
      state.items.map((item) => {
        if (item.id === action.payload.varid) {
          item.qty -= 1;
          item.price = item.qty * item.basePrice;
          item.totPrice += item.price;
          // console.log(item.price);
        }
      });
    },
    remove: (state, action) => {
      let empty_ar =[]
      state.items.map((item) => {
        if (item.id !== action.payload.varid) {
          
          empty_ar=[...empty_ar,item]
          console.log(empty_ar);
        }
        
      });
      state.items=empty_ar
      // console.log('helo');
    },

    incrementByAmount: (state, action) => {
      state.value += 1;
      state.total += Number(action.payload.price);
      console.log(state.total);
      let check = true;

      if (!action?.payload?.basePrice)
        action.payload.basePrice = action.payload.price;
      // action.payload.totPrice =0
      // action.payload.totPrice +=action.payload.price;
      // console.log(action.payload.totPrice);

      state.items.map((item) => {
        if (item.id === action.payload.id) {
          item.qty += 1;
          item.price = item.qty * item.basePrice;
          item.totPrice += item.price;
          console.log(item.totPrice);
          check = false;
        }
      });
      // let Totalprice=0
      // state.items.map((e)=>{
      //   Totalprice += e.price
      //   console.log(Totalprice);

      // })

      if (check == true) {
        const new_items = [...state.items, action.payload];
        // const new1_items = [...new_items, Totalprice];
        state.items = new_items;
      }
      console.log(state.items);

      // const new_items = [...state.items, action.payload]
      // state.items=new_items;
      // console.log(new_items);
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, remove } = counterSlice.actions;

export default counterSlice.reducer;
