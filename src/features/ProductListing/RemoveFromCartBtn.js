import React from 'react'

const RemoveFromCartBtn = props => (
  <button onClick={() => props.removeFromCart(props.cartItem)}>
    Remove
  </button>
)

export default RemoveFromCartBtn