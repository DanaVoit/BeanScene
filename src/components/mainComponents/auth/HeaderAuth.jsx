import React, { useState } from "react";

function HeaderAuth() {
  const [isOpenSign, setIsOpenSign] = useState(false);
  const [isOpenLogin, setIsOpenLogin] = useState(false);

  const openSignForm = () => {
    setIsOpenSign(true);
    document.body.style.overflow = "hidden";
  };

  const closeSignForm = () => {
    setIsOpenSign(false);
    document.body.style.overflow = "auto";
  };

  const openLoginForm = () => {
    setIsOpenLogin(true);
    document.body.style.overflow = "hidden";
  };

  const closeLoginForm = () => {
    setIsOpenLogin(false);
    document.body.style.overflow = "auto";
  };

  return (
    <div className="header-auth">
      <button onClick={openSignForm} type="button" className="btn">
        Sign in
      </button>
      <button type="button" onClick={openLoginForm} className="btn btn_black">
        Log in
      </button>

      {isOpenSign && (
        <div className="overlay">
          <div className="form-sign">
            <form className="form-sign-area">
              <p className="main-txt">NickName</p>{" "}
              <input type="text" name="firstname" />
              <p className="main-txt">Phone</p>{" "}
              <input type="phone" name="phone" />
              <p className="main-txt">Email</p>{" "}
              <input type="email" name="email" />
              <p className="main-txt">Password</p>{" "}
              <input type="password" name="password" />
              <div className="form-sign-check">
                <input type="checkbox" />
                <p>I agree with the rules and accept </p>
              </div>
              <input type="submit" value="Sign in" className="btn btn_black" />
              <button className="form-sign-close" onClick={closeSignForm}>
                X
              </button>
              <p className="main-txt">
                Do you have account?{" "}
                <span>
                  <a href="#form-sign">Log in here</a>
                </span>
              </p>
            </form>
          </div>
        </div>
      )}

      {isOpenLogin && (
        <div className="overlay">
          <div className="form-sign" id="form-sign">
            <form className="form-sign-area  form-sign-area--login">
              <p className="main-txt">Email</p>{" "}
              <input type="email" name="email" />
              <p className="main-txt">Password</p>{" "}
              <input type="password" name="password" />
              <input type="submit" value="Log in" className="btn btn_black" />
              <button className="form-sign-close" onClick={closeLoginForm}>
                X
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export { HeaderAuth };
