// import { useSelector } from "react-redux";
// import * as actionTypes from "../types/shopTypes";
// // const restoOne = useSelector((state) => state.restoOne);
// // const { OneResto } = restoOne;
// // const { categories, establishment, top } = OneResto;

// const INITIAL_STATE = {
//   cart: [],
//   currentItem: null,
// };

// const shopReducer = (state = INITIAL_STATE, action) => {

//   const { type, payload }=action;
//   switch (action.type) {
//     case actionTypes.ADD_TO_CART:
//       // Great Item data from products array
//       const item = state.cart.products.find(
//         (product) => product.id === payload.id
//       );
//       console.log(`item`, item)
//       // Check if Item is in cart already
//       const inCart = state.cart.find((item) =>
//         item.id === action.payload.id ? true : false
//       );

//       return {
//         ...state,
//         cart: inCart
//           ? state.cart.map((item) =>
//               item.id === action.payload.id
//                 ? { ...item, quantity: item.quantity + 1 }
//                 : item
//             )
//           : [...state.cart, { ...item, quantity: 1 }],
//       };
//     case actionTypes.REMOVE_FROM_CART:
//       return {
//         ...state,
//         cart: state.cart.filter((item) => item.id !== payload.id),
//       };
//     case actionTypes.ADJUST_ITEM_QTY:
//       return {
//         ...state,
//         cart: state.cart.map((item) =>
//           item.id === payload.id
//             ? { ...item, quantity: +payload.quantity }
//             : item
//         ),
//       };
//     case actionTypes.LOAD_CURRENT_ITEM:
//       return {
//         ...state,
//         currentItem: payload,
//       };
//     default:
//       return state;
//   }
// };

// export default shopReducer;
