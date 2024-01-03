import { useEffect, useState } from "react";
import axios from "axios";

export function Mypage({ user }) {
  const [isEdit, setIsEdit] = useState(false);
  const [editUser, setEditUser] = useState({
    name: user?.name,
    email: user?.eamil,
  });
  const handleEdit = () => {
    console.log(editUser);
    setIsEdit((prev) => !prev);
  };

  const handleEditUser = (e) => {
    setEditUser({
      ...editUser,
      [e.target.name]: e.target.value,
    });
  };
  const handleEditUserSubmit = async (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/user/edit", { id: user?._id, editUser })
      .then((res) => {
        console.log(res.data.message);
        window.location.href = "/mypage";
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <form onSubmit={handleEditUserSubmit}>
        <div>
          <span>name : </span>
          <input
            name="name"
            placeholder={user?.name || ""}
            disabled={!isEdit}
            onChange={handleEditUser}
          ></input>
        </div>
        <div>
          <span>email : </span>
          <input
            name="email"
            placeholder={user?.email || ""}
            disabled={!isEdit}
            onChange={handleEditUser}
          ></input>
        </div>

        {!isEdit && <button onClick={handleEdit}>수정</button>}
        {isEdit && <button type="submit">저장</button>}
      </form>
    </>
  );
}
