export const initialState = {
  basket: [],
};

// Selector
// The Selector is used to calculate total amount of goods in the basket
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case 'REMOVE_FROM_BASKET':
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      // Copy the current basket content
      let newBasket = [...state.basket];

      // Pick the items with the same title and remove one of them
      // using the splice()
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id} as it's not in the basket)`
        );
      }

      // After splicing, make the state of the newBasket the current state
      return {
        ...state,
        basket: newBasket
      };

    default:
      return state;
  }
};

export default reducer;