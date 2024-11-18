import { useRef } from "react";
import { FaFacebookMessenger, FaWhatsapp, FaViber } from "react-icons/fa";

export const Inquiry = () => {
  const mapReference = useRef<null | HTMLIFrameElement>(null);
  return (
    <div className=" w-full lg:flex-row flex-col-reverse h-full py-16 flex items-start gap-10 ">
      {/* Google Map iframe */}
      <div
        onClick={() => mapReference.current?.click()}
        className="relative  w-full   lg:w-[55%] h-[250px] cursor-pointer lg:h-[400px] rounded-lg overflow-hidden"
      >
        <div className="absolute z-[100] h-[100px] bottom-0 left-0   w-full  bg-gradient-to-t from-black to-transparent"></div>

        <iframe
          ref={mapReference}
          allowFullScreen={true}
          className="w-full h-full rounded-lg transform transition-all duration-500 hover:scale-105"
          loading="lazy"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3026.897405829733!2d85.33158407477636!3d27.689059176193012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19e99b7e259f%3A0xe77e0b6b366f6c1c!2sDailo%20Daily%20See%20Us!5e1!3m2!1sen!2snp!4v1731576014026!5m2!1sen!2snp"
          title="Restaurant Location"
        ></iframe>
      </div>

      {/* Inquiry Form Section */}
      <div className="w-full lg:w-[40%]  h-full   flex flex-col items-center justify-start gap-6 sm:gap-14 text-center">
        <div className="w-full flex flex-col gap-9 items-center justify-center">
          <h1 className="sm:text-3xl text-2xl font-semibold tracking-wider text-[var(--primary-text)]">
            Do you have an inquiry?
          </h1>

          {/* Social Media Links */}
          <div className="flex gap-10 sm:gap-14 justify-center">
            <a
              className="bg-[#0078FF] p-4 rounded-full transition-colors duration-300 text-white hover:bg-[#0061D1] "
              href="#"
            >
              <FaFacebookMessenger className="text-xl sm:text-2xl" />
            </a>
            <a
              className="bg-[#1a9e30] p-4 rounded-full transition-colors duration-300 text-white hover:bg-[#128c3b] "
              href="#"
            >
              <FaWhatsapp className="text-xl sm:text-2xl" />
            </a>
            <a
              className="bg-[#7200C8] p-4 rounded-full transition-colors duration-300 text-white hover:bg-[#5C00A2]"
              href="#"
            >
              <FaViber className="text-xl sm:text-2xl" />
            </a>
          </div>
        </div>

        {/* Subscription Form */}
        <form className="flex sm:flex-row flex-col  text-[var(--primary-text)] lg:flex-row items-center justify-center gap-2 sm:gap-4 w-full mt-8">
          <input
            id="subscribe"
            type="email"
            placeholder="Enter your email..."
            className="w-full  lg:w-[70%] sm:p-4 p-2 rounded-lg border-2 border-[var(--primary-color)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
          />
          <button
            type="submit"
            className="sm:w-[30%] w-full text-white  p-[0.6rem] sm:py-[1.1rem] rounded-lg  lg:mt-0"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};
