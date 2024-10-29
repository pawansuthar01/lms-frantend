import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/homePage";
import AboutPage from "./Pages/AboutUs";
import NotFoundPage from "./Pages/NotFoundPage";
import SignUp from "./Pages/Signup";
import Login from "./Pages/Login";
import CoursesList from "./Pages/Course/coursesList";
import ContactPage from "./Pages/ContactPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/About" element={<AboutPage />}></Route>
        <Route path="/SignUp" element={<SignUp />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Contact" element={<ContactPage />}></Route>
        <Route path="/Courses" element={<CoursesList />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
