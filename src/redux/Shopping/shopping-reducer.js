import * as actionTypes from "./shopping-types";

const INITIAL_STATE = {
  products: [
    {
      id: 1,
      title: "Mind Freshner BreakFast",
      description:
        "This will help you to fresh your mind",
      price: 15.0,
      image:
        "https://i.ibb.co/BzLSQH0/breakfast6.jpg",
    },
    {
      id: 2,
      title: "Large Coffee Cup",
      description:
        "Get a big cup of coffee every morning before the day starts",
      price: 20.0,
      image:
        "https://images.unsplash.com/photo-1572119865084-43c285814d63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 3,
      title: "Platter Special-I",
      description:
        "Get your daily protien to make you healthy",
      price: 50.0,
      image:
        "https://i.ibb.co/PZP4VM6/dinner8.jpg",
    },
    {
      id: 4,
      title: "Platter Special-II",
      description:
        "Eat a egg daily and become more stronger and healthy",
      price: 70.0,
      image:
        "https://i.ibb.co/tpT8WxF/dinner5.jpg",
    },
    {
      id: 5,
      title: "Platter Special-III",
      description:
        "Eat vegetables and become more fresh",
      price: 60.0,
      image:
        "https://i.ibb.co/R4BPQtV/lunch5.jpg",
    },
  ],
  cart: [],
  currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      // Great Item data from products array
      const item = state.products.find(
        (product) => product.id === action.payload.id
      );
      // Check if Item is in cart already
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case actionTypes.ADJUST_ITEM_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };
    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
