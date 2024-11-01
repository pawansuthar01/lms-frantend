import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
function Footer() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();

  return (
    <>
      <footer className="  bg-gray-800 relative left-0 bottom-0 h-[10vh] py-5 flex flex-col sm:flex-row items-center justify-between text-white sm:px-20">
        <section className="text-lg text-red">
          Copyright {year} | All rights reserved
        </section>
        <section className="flex items-center justify-center gap-5 text-2xl text-white pt-4 ">
          <a className="hover:text-yellow-500 transition-all ease-in-out duration-300 cursor-pointer">
            <BsFacebook />
          </a>
          <a className="hover:text-yellow-500 transition-all ease-in-out duration-300  cursor-pointer">
            <BsInstagram />
          </a>
          <a className="hover:text-yellow-500 transition-all ease-in-out duration-300  cursor-pointer">
            <BsLinkedin />
          </a>
          <a className="hover:text-yellow-500 transition-all ease-in-out duration-300  cursor-pointer">
            <BsTwitter />
          </a>
        </section>
      </footer>
    </>
  );
}

export default Footer;
