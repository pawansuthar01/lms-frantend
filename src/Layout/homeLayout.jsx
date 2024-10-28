import { FiMenu } from "react-icons/fi";
import { AiFillCloseCircle } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/footer";
import { useDispatch, useSelector } from "react-redux";

function HomeLayout({ children }) {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const isLoggedIn = useSelector((state) => state?.auth?.isLoggedIn);

  const role = useSelector((state) => state?.auth?.role);

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

  async function handleLogout(e) {
    e.preventDefault();
    // const res = await dispatch(logout());
    // if (res.payload.success)
    navigate("/");
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
          <ul className="menu p-4 w-50 h-[100%]   sm:w-80 bg-base-200 text-base-content space-y-5 relative">
            <li className="w-fit absolute right-2 z-50 ">
              <button onClick={hideSide}>
                <AiFillCloseCircle size={"20px"} />
              </button>
            </li>
            <li className="pt-5">
              <Link to="/">Home</Link>
            </li>
            {isLoggedIn && role == "ADMIN" && (
              <li>
                <Link to="/admin/dashBoard">Admin dashBoard</Link>
              </li>
            )}

            <li>
              <Link to="/Courses">All courses</Link>
            </li>
            <li>
              <Link to="/Contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/About">About Us</Link>
            </li>
            {!isLoggedIn && (
              <li className="w-[90%] absolute  bottom-4">
                <div className=" flex items-center justify-center w-full">
                  <button className=" btn btn-primary px-4 py-1  rounded-md font-semibold w-1/2  ">
                    <Link to="/Login">Login</Link>
                  </button>
                  <button className=" btn btn-secondary px-4 py-1  rounded-md font-semibold  w-1/2 ">
                    <Link to="/signUp">SignUp</Link>
                  </button>
                </div>
              </li>
            )}
            {isLoggedIn && (
              <li className="w-[90%] absolute  bottom-4">
                <div className=" flex items-center justify-center  w-full">
                  <button className=" btn-primary px-4 py-1  rounded-md font-semibold w-1/2">
                    <Link to="/profile">profile</Link>
                  </button>
                  <button className=" btn-secondary px-4 py-1  rounded-md font-semibold w-1/2">
                    <Link onClick={handleLogout}>Logout</Link>
                  </button>
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>

      {children}

      <Footer />
    </div>
  );
}

export default HomeLayout;
