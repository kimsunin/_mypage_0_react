import { useState } from "react";
import axios from "axios";

export function LoginForm() {
  const [user, setUser] = useState({
    name: "",
    password: "",
  });
  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const login = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/login", { user })
      .then((res) => {
        alert(res.data.message);
        if (res.data.message === "로그인 성공.") {
          const { isLogin, _id } = res.data;
          localStorage.setItem("LoginUser", JSON.stringify({ isLogin, _id }));
          window.location.href = "/";
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <h1>Login</h1>
      <form method="post" onChange={onChange} onSubmit={login}>
        <div className="Username">
          <input type="String" name="name" placeholder="Username" />
        </div>
        <div className="Password">
          <input type="password" name="password" placeholder="Password" />
        </div>
        <button type="submit">login</button>
        <button onClick={() => (window.location.href = "/join")}>join</button>
      </form>
    </>
  );
}
