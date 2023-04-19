import React,{ useState } from 'react';
import { useDispatch } from 'react-redux';
import { additem } from '../store/slices/cartSlice';
import { addWishListItem } from '../store/slices/wishListSlice';

export default function ProductsCard(props) {
  const { img, rating, title, price } = props

  const [isAdded, setIsAdded] = useState(false);
  

  const dispatch = useDispatch();

  const handleAddToCart = () =>{

    const item = {...props}
    dispatch(additem(item));

    setIsAdded(true);
    
    setTimeout(()=>{
      setIsAdded(false);
    },3000)
  }

  const handleAddToWithWishList = () =>{
    const item = {...props}
    dispatch(addWishListItem(item));

  }
  return (
    <div>
      <div className="product_card">
                <figure>
                <img src={img} alt="item-img" />
                </figure>
                <strong className="rating">{rating}</strong>
                <h4 className="title">{title}</h4>
                <h3 className="price">₹ {price.toLocaleString()}</h3>
                <div style={{display:"flex",width:"100%",justifyContent:"center"}}><button 
                  type="button"
                  className={`btn ${isAdded ? 'added' : ''}`}
                  onClick={handleAddToCart}>
                {isAdded ? 'Added' : 'Add to cart'}
                </button>
                <button 
                  type="button"
                  onClick={handleAddToWithWishList}
                  style={{height:"35px", width:"50px",marginTop:"1rem"}}>
                    
                   <img src="./images/heart.png" alt="" ></img> 
                </button></div>
              
            </div>
    </div>
  )
}
