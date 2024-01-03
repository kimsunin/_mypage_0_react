// eslint-disable-next-line
import React from "react";
import TopmenuBar from "./components/Header/Topmenu.js";

function Header({ loginState, name }) {
  return (
    <>
      <h3>Header</h3>
      <TopmenuBar loginState={loginState} name={name} />
    </>
  );
}

export default Header;
