// eslint-disable-next-line
import React from "react";
import Header from "./Header.js";
import Body from "./Body.js";
import Footer from "./Footer.js";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [user, setUser] = useState({});
  const [loginState, setLoginState] = useState({});
  useEffect(() => {
    if (localStorage.getItem("LoginUser")) {
      const _id = JSON.parse(localStorage.getItem("LoginUser"))._id;
      const isLogin = JSON.parse(localStorage.getItem("LoginUser"));
      setLoginState(isLogin);
      getUser(_id);
      console.log("exist user");
    } else {
      console.log("no user");
    }
  }, []);
  async function getUser(_id) {
    const response = await axios
      .get("http://localhost:4000/user/" + _id)
      .then((res) => {
        setUser(res.data.user);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <>
      <Header loginState={loginState} name={user?.name} />
      <Body user={user} />
      <Footer />
    </>
  );
}

export default App;
