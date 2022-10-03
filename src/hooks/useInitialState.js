import { useState } from 'react';

const initialState = {
  cart: [],
};

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = (product) => {
    const productExist = state.cart.find((elem) => elem.id === product.id);
    if (!productExist) {
      setState({
        ...state,
        cart: [...state.cart, product],
      });
    }
  };
  const removeFromCart = (id) => {
    setState({
      ...state,
      cart: state.cart.filter((elem) => elem.id !== id),
    });
  };

  return {
    state,
    addToCart,
    removeFromCart,
  };
};
export default useInitialState;
