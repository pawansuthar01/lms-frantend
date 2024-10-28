import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/homePage";
import AboutPage from "./Pages/AboutUs";
import NotFoundPage from "./Pages/NotFoundPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/About" element={<AboutPage />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
