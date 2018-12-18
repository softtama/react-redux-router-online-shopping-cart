import React from 'react'

const AddToCartBtn = props => (
  <button onClick={() => props.addToCart(props.product)}>
    Add to cart ({(props.cartItem && props.cartItem.quantity) || 0})
  </button>
)

export default AddToCartBtn