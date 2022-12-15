import Breadcrumb from "../../components/breadcrumb/breadcrumb";

function Login(props) {
  const breadcrumbs= [
    {
      title: 'Home',
      href: '/',
  
    },
    {
      title: 'Login',
      href: '/auth/login',
      
    },
  ]



  return (
    <>
    <Breadcrumb items={breadcrumbs}/>


    <div className="content">
      <div className="container">
        <div className="box">
          <div className="row">
            <div className="col-lg-offset-1 col-lg-5 col-md-offset-1 col-md-5 col-sm-12 col-xs-12">
              <div className="box-body">
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mb20">
                    <h3 className="mb10">Login</h3>
                  </div>
                  <form>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                      <div className="form-group">
                        <label
                          className="control-label sr-only"
                          htmlFor="email"
                        ></label>
                        <div className="login-input">
                          <input
                            id="email"
                            name="emaol"
                            type="text"
                            className="form-control"
                            placeholder="Enter your email id"
                            required
                          />
                          <div className="login-icon">
                            <i className="fa fa-user"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                      <div className="form-group">
                        <label className="control-label sr-only"></label>
                        <div className="login-input">
                          <input
                            name="password"
                            type="password"
                            className="form-control"
                            placeholder="***************"
                            required
                          />
                          <div className="login-icon">
                            <i className="fa fa-lock"></i>
                          </div>
                          <div className="eye-icon">
                            <i className="fa fa-eye"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mb20">
                      <button className="btn btn-primary btn-block mb10">
                        Login
                      </button>
                      <div>
                        <p>
                          Have an Account?<a href="#">Login</a>
                        </p>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12 ">
              <div className="box-body">
                <div className="feature-left">
                  <div className="feature-icon">
                    <img src="images/feature_icon_1.png" alt="" />
                  </div>
                  <div className="feature-content">
                    <h4>Loyalty Points</h4>
                    <p>
                      Aenean lacinia dictum risvitae pulvinar disamer seronorem
                      ipusm dolor sit manert.
                    </p>
                  </div>
                </div>
                <div className="feature-left">
                  <div className="feature-icon">
                    <img src="images/feature_icon_2.png" alt="" />
                  </div>
                  <div className="feature-content">
                    <h4>Instant Checkout</h4>
                    <p>
                      Aenean lacinia dictum risvitae pulvinar disamer seronorem
                      ipusm dolor sit manert.
                    </p>
                  </div>
                </div>
                <div className="feature-left">
                  <div className="feature-icon">
                    <img src="images/feature_icon_3.png" alt="" />
                  </div>
                  <div className="feature-content">
                    <h4>Exculsive Offers</h4>
                    <p>
                      Aenean lacinia dictum risvitae pulvinar disamer seronorem
                      ipusm dolor sit manert.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</>
  );
}

export default Login;
