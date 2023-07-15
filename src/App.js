// eslint-disable-next-line
import React from "react";
import Header from "./Header.js";
import Body from "./Body.js";
import Footer from "./Footer.js";
import { useEffect, useState } from "react";

function App() {
  const [loginState, setLoginState] = useState({
    isLogin: false,
  });
  useEffect(() => {
    if (localStorage.getItem("LoginUser")) {
      const { isLogin } = JSON.parse(localStorage.getItem("LoginUser"));
      setLoginState({ isLogin });
      console.log("exist user");
    } else {
      console.log("no user");
    }
  }, []);
  return (
    <>
      <Header loginState={loginState} />
      <Body />
      <Footer />
    </>
  );
}

export default App;
