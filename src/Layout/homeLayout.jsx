import { FiMenu } from "react-icons/fi";
import { AiFillCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import Footer from "../components/footer";

function HomeLayout({ children }) {
  function changeWight() {
    const drawerSide = document.getElementsByClassName("drawer-side");
    drawerSide[0].style.width = "auto";
  }

  function hideSide() {
    const element = document.getElementsByClassName("drawer-toggle");
    element[0].checked = false;

    const drawerSide = document.getElementsByClassName("drawer-side");
    drawerSide[0].style.width = "0";
  }
  return (
    <div className="min-h-[90vh] bg-gray-800 ">
      <div className="drawer absolute left-0 z-50 w-fit ">
        <input className="drawer-toggle" id="my-drawer" type="checkbox" />
        <div className="drawer-content">
          <label htmlFor="my-drawer" className=" relative cursor-pointer ">
            <FiMenu
              onClick={changeWight}
              size={"36px"}
              className=" font-bold m-4 text-white "
            />
          </label>
        </div>
        <div className="drawer-side w-0">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-50  sm:w-80 bg-base-200 space-y-5 relative">
            <li className="w-fit absolute right-2 z-50 ">
              <button onClick={hideSide}>
                <AiFillCloseCircle size={"20px"} className="" />
              </button>
            </li>
            <li className="pt-5">
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Courses">All courses</Link>
            </li>
            <li>
              <Link to="/Contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/About">About Us</Link>
            </li>
          </ul>
        </div>
      </div>

      {children}

      <Footer />
    </div>
  );
}

export default HomeLayout;
