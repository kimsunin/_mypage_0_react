import React, { useEffect } from "react";
// eslint-disable-next-line
function TopmenuBar({ loginState, name }) {
  const logout = () => {
    localStorage.removeItem("LoginUser");
  };
  return (
    <div>
      <nav>
        <div>
          <a href="/">Home</a>
          <a href="/notice">Notice</a>
        </div>
        <div>
          {!loginState.isLogin && <a href="/login">Login</a>}
          {loginState.isLogin && <a href="/mypage">{name}님</a>}
          {loginState.isLogin && (
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
