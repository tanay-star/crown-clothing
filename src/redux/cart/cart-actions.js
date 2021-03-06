import cartActionTypes from './cart-types'

export const toggleCartHidden = () => {
  return {
    type: cartActionTypes.TOGGLE_CART_HIDDEN,
  }
} //action of showing or hiding the cart

export const addItem = (item) => {
  return {
    type: cartActionTypes.ADD_ITEM,
    payload: item,
  }
} //action of adding item to cart

export const removeItem = (item) => {
  return {
    type: cartActionTypes.REMOVE_ITEM,
    payload: item,
  }
}

export const clearItemFromCart = (item) => {
  return {
    type: cartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item,
  }
} // action of removing item.

export const clearCart = () => {
  return {
    type: cartActionTypes.CLEAR_CART,
  }
} //action of clearing the cart
