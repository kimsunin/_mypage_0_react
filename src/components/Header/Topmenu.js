import React from "react";
// eslint-disable-next-line
function TopmenuBar(loginState) {
  const logout = () => {
    localStorage.removeItem("LoginUser");
  };
  console.log(loginState);
  return (
    <div>
      <nav>
        <div>
          <a href="/">Home</a>
          <a href="/notice">Notice</a>
        </div>
        <div>
          {!loginState.loginState.isLogin && <a href="/login">Login</a>}
          {loginState.loginState.isLogin && <a href="/mypage">Mypage</a>}
          {loginState.loginState.isLogin && (
            <a href="/" onClick={logout}>
              Logout
            </a>
          )}
        </div>
      </nav>
    </div>
  );
}

export default TopmenuBar;
