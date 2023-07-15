// eslint-disable-next-line
import React from "react";
import TopmenuBar from "./components/Header/Topmenu.js";

function Header({ loginState }) {
  return (
    <>
      <h3>Header</h3>
      <TopmenuBar loginState={loginState} />
    </>
  );
}

export default Header;
