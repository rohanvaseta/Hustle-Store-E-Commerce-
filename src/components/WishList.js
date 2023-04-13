import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleWishList,removeWishListItem } from '../store/slices/wishListSlice';

const WishList = () => {
    const { isWishListOpen , wishListItems} = useSelector((state)=> state.wishlist);

    const dispatch = useDispatch();
  
    const handleCloseWishList = (close) =>{
      dispatch(toggleWishList(close));
    }
  
    const handleRemoveWishList = (itemId) =>{
      
      dispatch(removeWishListItem(itemId));
    
    }
    const wishListQuantity = wishListItems.length
  return (
    <div>
       {
                isWishListOpen && (
                    <div id="cart">
                        <div className="cart_content">
                            <div className="cart_head">
                                <div
                                    title="Close"
                                    className="close_btn"
                                    onClick={() => handleCloseWishList(false)}
                                >
                                    <span>&times;</span>
                                </div>
                            </div>

                            <div className="cart_body">
                                {
                                    wishListItems === 0 ? (
                                        <h2>Cart is empty</h2>
                                    ) : (
                                        wishListItems.map(item => {
                                            const { id, img, title, price, quantity } = item;
                                            const itemTotal = price * quantity;
                                          
                                            return (
                                                <div className="cart_items" key={id}>
                                                    <figure className="cart_items_img">
                                                        <img src={img} alt="product-img" />
                                                    </figure>

                                                    <div className="cart_items_info">
                                                        <h4>{title}</h4>
                                                        <h3 className="price">₹ {itemTotal.toLocaleString()}</h3>
                                                    </div>

                                                    

                                                    <div
                                                        title="Remove Item"
                                                        className="cart_items_delete"
                                                        onClick={() => handleRemoveWishList(id)}
                                                    >
                                                        <span>&times;</span>
                                                    </div>
                                                </div>
                                            );
                                        })
                                    )
                                }
                            </div>

                            <div className="cart_foot">


                                <button
                                    type="button"
                                    className="checkout_btn"
                                    disabled={wishListQuantity === 0}
                                >
                                    Checkout
                                </button>
                            </div>
                        </div>
                    </div>
                )
            }
    </div>
  )
}

export default WishList
