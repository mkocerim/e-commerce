function ProductItem(props){

    console.log('>>PRODUCT ITEM',props)

    

    return(
        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 mb30">
        <div className="product-block">
          <div className="product-img">
          <img src={'http://ecommerce-api.udemig.dev' + props.products.images[0].path } alt="" />
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
              <a href="#" className="product-btn btn-like">
                <i className="fa fa-heart"></i>
              </a>
              <a href="#" className="product-btn btn-cart">
                <i className="fa fa-shopping-cart"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
}
export default ProductItem