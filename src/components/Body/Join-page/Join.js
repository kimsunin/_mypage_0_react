import { useState } from "react";
import axios from "axios";

export function JoinForm() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const join = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/join", { user })
      .then((res) => {
        alert(res.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form method="post" onChange={onChange} onSubmit={join}>
      <div>
        <input type="String" name="name" placeholder="Name" />
      </div>
      <div>
        <input type="email" name="email" placeholder="Email" />
      </div>
      <div>
        <input type="password" name="password" placeholder="Password" />
      </div>
      <div>
        <input type="password" name="password2" placeholder="Password-check" />
      </div>

      <button type="submit">join</button>
    </form>
  );
}
