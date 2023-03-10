import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  value: 0,
  total: 0,
  items: [],
  medicine:[],
  medicine_dup:[],
  med_name:'',
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.value += 1;
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
      state.value -= 1;
      state.total -= (action.payload.var_price);
      state.items.map((item) => {
        if (item.id === action.payload.varid) {
          item.qty -= 1;
          item.price = item.qty * item.basePrice;
          item.totPrice += item.price;
          // console.log(item.price);
        }
      });
    },
    insert: (state, action) => {
      state.medicine = action.payload 
      state.medicine_dup = state.medicine

    },
    search: (state, action) => {
        state.med_name = action.payload
        const searchTerm = state.med_name
        console.log(searchTerm);
        if(searchTerm==""){
          state.medicine_dup = state.medicine
        }
        else{

          const result = state.medicine.filter(med => med.name.includes(searchTerm));
          state.medicine_dup = result
          console.log(result);
        }
        
    },

    remove: (state, action) => {
      

      const empty_ar = state.items.filter((item) => item.id !== action.payload.varid);

      console.log(empty_ar);
      state.value = 0;
      if(empty_ar){
        state.total = 0;
        empty_ar.map((item) => {
          state.value += item.qty;
          state.total += item.qty * item.basePrice;
        });
      }
      else
      {
        state.total=0;
      }
        
      state.items=empty_ar

      

      // remove items using filter
      // let numbers = [1, 2, 3, 4, 5];

      // Remove the number 3 from the array
      // numbers = numbers.filter(number => number !== 3);

      // console.log(numbers); // [1, 2, 4, 5]

    },

    incrementByAmount: (state, action) => {
      state.value += 1;
      state.total += Number(action.payload.price);
      // console.log(state.total);
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
          // console.log(item.totPrice);
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
export const { increment, decrement, incrementByAmount, remove , search, insert} = counterSlice.actions;

export default counterSlice.reducer;
