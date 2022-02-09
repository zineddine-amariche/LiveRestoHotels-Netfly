const cart = [];
const cartLocal = JSON.parse(localStorage.getItem("Cart"));
const statePanier = cartLocal ? cartLocal : cart;

const handleCart = (state = statePanier, action) => {
  const product = action.payload;
  switch (action.type) {
    case "ADDITEM":
      // Check if Product is Already Exist
      const exist = state.find((x) => x.id === product.id);

      if (exist) {
        // Increase the Quantity
        return state.map((x) =>
          x.id === product.id ? { ...x, quantity: x.quantity + 1 } : x
        );
      } else {
        const product = action.payload;
        return [
          ...state,
          {
            ...product,
            quantity: 1,
          },
        ];
      }

    case "DELITEM":
      const exist1 = state.find((x) => x.id === product.id);
      if (exist1.quantity === 1) {
        return state.filter((x) => x.id !== exist1.id);
      } else {
        return state.map((x) =>
          x.id === product.id ? { ...x, quantity: x.quantity - 1 } : x
        );
      }
    case "DELETE_ALL_ITEMS":
      return state.filter((x) => x.id == !x.id);

    default:
      return state;
  }
};

export default handleCart;
