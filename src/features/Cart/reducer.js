const cartWithoutItem = (cart, item) => (
  cart.filter(cartItem => cartItem.id !== item.id)
)

const itemInCart = (cart, item) => (
  cart.find(cartItem => cartItem.id === item.id)
)

const addToCart = (cart, item) => {
  const cartItem = itemInCart(cart, item)
  return cartItem === undefined
    ? [...cartWithoutItem(cart, item), { ...item, quantity: 1 }]
    : [...cartWithoutItem(cart, item), { ...cartItem, quantity: cartItem.quantity + 1 }]
}

const removeFromCart = (cart, item) => (
  item.quantity === 1
    ? [...cartWithoutItem(cart, item)]
    : [...cartWithoutItem(cart, item), { ...item, quantity: item.quantity - 1 }]
)

const removeAllFromCart = (cart, item) => (
  [...cartWithoutItem(cart, item)]
)

const emptyCart = () => []

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return addToCart(state, action.payload)

    case 'REMOVE_FROM_CART':
      return removeFromCart(state, action.payload)

    case 'REMOVE_ALL_FROM_CART':
      return removeAllFromCart(state, action.payload)

    case 'EMPTY_CART':
      return emptyCart()

    default:
      return state
  }
}

export default cartReducer