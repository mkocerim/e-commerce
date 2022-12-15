import { useState } from "react";
import { useDispatch } from "react-redux";
import Breadcrumb from "../../components/breadcrumb/breadcrumb";
import useApi from "../../hooks/useApi";

import { setToken } from "../../redux/authSlice";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const api = useApi()
  const dispatch = useDispatch()

  const breadcrumbs = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Login",
      href: "/auth/login",
    },
  ];


  const onFormSubmit = (event) => {
    event.preventDefault();

    const postData = { email, password }    // const postData = {email:email ,password}

    api.post("shop/authentication-token", postData)
      .then(response => {
        console.log(">>LOGIN RESPONSE", response);
        dispatch(setToken({
          token:response.data.token
        }))
        document.location.replace('/')
      })
      .catch(err => {
        console.error(">> LOGIN ERR", err);
        alert("An error occured:" + err);
      });
  };

  return (
    <>
      <Breadcrumb items={breadcrumbs} />

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
                    <form onSubmit={onFormSubmit}>
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="form-group">
                          <label
                            className="control-label sr-only"
                            htmlFor="email"
                          ></label>
                          <div className="login-input">
                            <input
                              onChange={(event) => {
                                setEmail(event.target.value);
                              }}
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
                              onChange={(event) => {
                                setPassword(event.target.value);
                              }}
                              type="password"
                              className="form-control"
                              placeholder="Placeholder"
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
                            Don't you have an account ?
                            <a href="/auth/register">Register</a>
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
                        Aenean lacinia dictum risvitae pulvinar disamer
                        seronorem ipusm dolor sit manert.
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
                        Aenean lacinia dictum risvitae pulvinar disamer
                        seronorem ipusm dolor sit manert.
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
                        Aenean lacinia dictum risvitae pulvinar disamer
                        seronorem ipusm dolor sit manert.
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
