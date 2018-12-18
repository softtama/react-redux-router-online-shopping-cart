import React from 'react'
import { connect } from 'react-redux'

const sort = items => (
  items.sort((a, b) => (
    (a.id !== b.id) ? a.id - b.id : 0
  ))
)

const EmptyCart = props => (
  <div>
    <p>Cart is empty. Add some products here!</p>
  </div>
)

const Cart = props => (
  props.cart && props.cart.length > 0 ? (
  <div>
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Qty.</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
      {sort(props.cart).map(item => (
        <tr key={item.id}>
          <td>{item.name}</td>
          <td>{item.quantity}</td>
          <td>
            <button onClick={() => props.addToCart(item)}> + </button>
            <button onClick={() => props.removeFromCart(item)}> - </button>
          </td>
          <td>
            <button onClick={() => props.removeAllFromCart(item)}>Remove all</button>
          </td>
        </tr>
      ))}
      </tbody>
    </table>
    <button onClick={() => props.emptyCart()}>Empty Cart</button>
  </div>
  ) : (
  <EmptyCart />
  )
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
  },
  removeAllFromCart: item => {
    dispatch({
      type: 'REMOVE_ALL_FROM_CART',
      payload: item
    })
  },
  emptyCart: () => {
    dispatch({
      type: 'EMPTY_CART'
    })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)