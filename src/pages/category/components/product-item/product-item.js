import { useDispatch, useSelector } from "react-redux";
import useApi from "../../../../hooks/useApi";
import { updateFullCart } from "../../../../redux/cartSlice";




function ProductItem(props) {



  const cartState = useSelector(state => state.cartState) 
  const api= useApi()
  const dispatch = useDispatch()

  console.log(">>PRODUCT ITEM", props);

  const onAddToCartButtonClick= (event)=>{
    event.preventDefault()
    console.log('>> PRODUCT ITEM DETAILS', props.products)

    const tokenValue= cartState.tokenValue

    const productVariant = props.products.defaultVariant.replace('/api/v2/shop/product-variants/', '')

    const postData = {
      productVariant: productVariant,
      quantity: 1,
    }

    api.post(`shop/orders/${tokenValue}/items`,postData)
    .then(response=>{
      console.log('CART ITEM ADD RESPONSE',response)
      dispatch(updateFullCart(response.data))
    })
    .catch(err=>{
      console.error('CART ITEM ADD ERROR',err)

    })
    

  }

  return (
    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 mb30">
      <div className="product-block">
        <div className="product-img">
          <img
            src={
              "http://ecommerce-api.udemig.dev" + props.products.images[0].path
            }
            alt=""
          />
        </div>
        <div className="product-content">
          <h5>
            <a href="#" className="product-title">
              {props.products.name}
            </a>
          </h5>
          <div className="product-meta">
            <a href="#" className="product-price">
              $1500
            </a>
            <a href="#" className="discounted-price">
              $2000
            </a>
            <span className="offer-price">40%off</span>
          </div>
          <div className="shopping-btn">
           

            <a
              onClick={onAddToCartButtonClick}
              href="#"
              className="product-btn btn-cart"
            >
              <i className="fa fa-shopping-cart"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductItem;
