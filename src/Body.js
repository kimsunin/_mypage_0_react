import { TrendList } from "./components/Body/Home.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginForm } from "./components/Body/Login-page/Login.js";
import { Notice } from "./components/Body/Notice.js";
import { Mypage } from "./components/Body/Mypage.js";
import { JoinForm } from "./components/Body/Join-page/Join.js";

function Body() {
  return (
    <>
      <h3>Body</h3>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TrendList />} />
          <Route path="/notice" element={<Notice />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/join" element={<JoinForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Body;
