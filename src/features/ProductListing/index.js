import React from 'react'
import ProductListItem from './ProductListItem'
import { connect } from 'react-redux'

const ProductListing = props => (
  <div className="product-listing">
  {props.products.map(product => (
    <ProductListItem
      product={product}
      key={product.id}
      cartItem={props.cart.filter(cartItem => cartItem.id === product.id)[0]}
      addToCart={props.addToCart}
      removeFromCart={props.removeFromCart}
    />
  ))}
  </div>
)

const mapStateToProps = state => ({
  cart: state.cart
})

const mapDispatchToProps = dispatch => ({
  addToCart: item => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: item
    })
  },
  removeFromCart: item => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: item
    })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductListing)