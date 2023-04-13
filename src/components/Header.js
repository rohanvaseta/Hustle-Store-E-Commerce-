import React from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { toggleCart } from '../store/slices/cartSlice';
import { toggleWishList } from '../store/slices/wishListSlice';


export default function Header() {

  const { cartItem } = useSelector((state)=>state.cart);
  
  const dispatch = useDispatch();

  const handleOpenCart = (open) =>{
    dispatch(toggleCart(open));
  }

  const { wishListItems } = useSelector((state)=>state.wishlist);

  const hnadleOpenWishList = (open)=>{
    dispatch(toggleWishList(open));
  }
  
  const cartQuantity = cartItem.length;
  const wishListQuantity = wishListItems.length
  return (
    <div>
      <header id="header">
                <div className="container">
                    <div className="navbar">
                        <h4>Hustle Store</h4>
                        <div className="nav_menu" style={{display:"flex" ,justifyContent:"space-around",width:"120px"}}>
                          <div title="Wishlist"
                                className='cart-icon'
                                onClick={()=> hnadleOpenWishList(true)}>
                          <img src="/images/wishlist.svg"alt="bag-icon" />
                          <span className='badge'>{wishListQuantity}</span></div>
                            <div title="Cart"
                                  className='cart-icon'
                                  onClick={()=> handleOpenCart(true)}       > 
                                <img src="/images/bag-icon.svg" alt="bag-icon" />
                                <span className="badge">{cartQuantity}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
    </div>
  )
}
