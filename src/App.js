import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllPosts from "./components/AllPosts";
import Home from "./pages/Home";
import SinglePost from "./pages/SinglePost";
import Blog from "./pages/Blog";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path='/' exact />
        <Route element={<Blog />} path='/blog' exact />
        <Route element={<SinglePost />} path='/:slug' />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
