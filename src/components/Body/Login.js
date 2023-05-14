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
    e.preventdefault();
    axios.post("http://localhost:4000/login", { user }).then((res) => {
      alert(res.data.message);
    });
  };

  return (
    <>
      <h1>Login</h1>
      <form method="post" onChange={onChange} onSubmit={login}>
        <div className="Username">
          <input type="text" name="name" placeholder="Username" />
        </div>
        <div className="Password">
          <input type="password" name="password" placeholder="Password" />
        </div>
        <button type="submit">login</button>
      </form>
    </>
  );
}
