import HomeLayout from "../Layout/homeLayout";

function ContactPage() {
  return (
    <HomeLayout>
      <div className="flex justify-center items-center h-[90vh] ">
        <form className=" flex flex-col items-center justify-center gap-2 p-4  rounded-sm text-white  shadow-[0_0_10px_white] w-[22rem]">
          <h1 className="text-3xl font-semibold">Contact form</h1>
          <div className=" flex flex-col w-full gap-1">
            <label htmlFor="name" className=" font-semibold text-xl ">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your Name.."
              className="bg-transparent border px-2 py-1 rounded-sm"
            />
          </div>
          <div className=" flex flex-col w-full gap-1">
            <label htmlFor="email" className=" font-semibold text-xl ">
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Enter your email.."
              className="bg-transparent border px-2 py-1 rounded-sm"
            />
          </div>
          <div className=" flex flex-col w-full gap-1">
            <label htmlFor="message" className=" font-semibold text-xl ">
              message
            </label>
            <textarea
              id="name"
              name="name"
              placeholder="Enter your message .."
              className="  h-40 bg-transparent border px-2 py-1 rounded-sm resize-none"
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 px-4 py-2 font-semibold tex-xl text-white w-full mt-2 rounded-lg hover:bg-green-400"
          >
            Submit !
          </button>
        </form>
      </div>
    </HomeLayout>
  );
}
export default ContactPage;
