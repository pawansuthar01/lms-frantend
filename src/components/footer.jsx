import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs";
function Footer() {
  const currYear = new Date();
  const year = currYear.getFullYear();
  return (
    <>
      <footer className="relative left-0 bottom-0 h-[10vh] justify-evenly py-5  flex-col sm:flex-row flex  bg-fuchsia-700 items-center text-white ">
        <section className=" text-lg   ">
          copyright@ {year} | All right reserved
        </section>
        <section className=" flex gap-5 items-center text-2xl text-white  cursor-pointer">
          <a className=" hover:text-yellow-200 transition-all ease-in-outWS">
            <BsFacebook />
          </a>
          <a className=" hover:text-yellow-200 transition-all ease-in-out cursor-pointer ">
            <BsInstagram />
          </a>
          <a className=" hover:text-yellow-200 transition-all ease-in-out cursor-pointer ">
            <BsTwitter />
          </a>
          <a className=" hover:text-yellow-200 transition-all ease-in-out  cursor-pointer">
            <BsLinkedin />
          </a>
        </section>
      </footer>
    </>
  );
}
export default Footer;
