import { Reset } from "styled-reset";
import Header from "./components/Base/Header";
import Footer from "./components/Base/Footer";
import "./styles/common.scss";
import "./styles/layout.scss";
import "./styles/responsive.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import List from "./pages/board/List";
import NotFound from "./pages/NotFound";
import Detail from "./pages/board/Detail";
import Edit from "./pages/board/Edit";
import Write from "./pages/board/Write";
import Login from "./pages/member/Login";
import Join from "./pages/member/Join";
import Auth from "./hoc/auth";

function App() {
  const AuthHomePage = Auth(Home, null, null);
  const AuthLoginPage = Auth(Login, false, null);
  const AuthJoinPage = Auth(Join, false, null);

  return (
    <BrowserRouter>
      <Reset />
      <Header />
      <Routes>
        <Route path="/" element={<AuthHomePage />} />
        <Route path="/login" element={<AuthLoginPage />} />
        <Route path="/join" element={<AuthJoinPage />} />
        <Route path="/about" element={<About />} />
        {/* 프로젝트 게시판 */}
        <Route path="/board/list" element={<List />} />
        <Route path="/board/detail" element={<Detail />}>
          <Route path=":shortId" element={<Detail />} />
        </Route>
        <Route path="/board/write" element={<Write />} />
        <Route path="/board/update/:shortId" element={<Edit />} />
        {/* 프로젝트 게시판 */}
        {/* 스터디 게시판 */}
        {/* 스터디 게시판 */}
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
