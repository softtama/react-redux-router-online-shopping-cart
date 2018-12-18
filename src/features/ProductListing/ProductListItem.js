import React from 'react'
import AddToCartBtn from './AddToCartBtn'
import RemoveFromCartBtn from './RemoveFromCartBtn'

const ProductListItem = props => (
  <div className="product-list-item">
    <h3>{props.product.name}</h3>
    <img
      height={100}
      title={props.product.name}
      src={`/img/products/${props.product.image}`}
      alt={props.product.name}
    />
    <div>{props.product.description}</div>
    <div>${props.product.price}</div>
    <div>
      <AddToCartBtn
        cartItem={props.cartItem}
        product={props.product}
        addToCart={props.addToCart}
      />
      {props.cartItem ? (
        <RemoveFromCartBtn
          cartItem={props.cartItem}
          product={props.product}
          removeFromCart={props.removeFromCart}
        />
      ) : null}
    </div>
  </div>
)

export default ProductListItem