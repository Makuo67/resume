import React from "react";
import {
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { bannerImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={bannerImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Makuochukwu Okeke</h3>
        <p className="text-lg font-normal text-gray-400">Software Engineer</p>
        <p className="text-base text-gray-400 tracking-wide">
          If you would like to have a chat with me about any topic or just want
          to say hi, feel free to contact me.
        </p>

        <div className="flex flex-col">
          <p className="text-base text-gray-400 flex items-center gap-">
            Phone:{" "}
            <span className="text-lightText">
              <a className="hover:text-designColor" href="tel:+254794537279">
                +2507 9080 1063
              </a>
            </span>
          </p>
          <p className="text-base text-gray-400 flex items-center gap-2 ">
            Email:{" "}
            <a
              className="hover:text-designColor"
              href="mailto:w.yimam@alustudent.com"
            >
              m.okeke@alustudent.com
            </a>
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me on</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <a
              href="https://www.linkedin.com/in/makuochukwu-okeke-8551671b1/"
              rel="noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </span>

          <span className="bannerIcon">
            <a href="https://twitter.com/OkekeCh72667362" rel="noreferrer">
              <FaTwitter />
            </a>
          </span>

          <span className="bannerIcon">
            <a href="https://www.instagram.com/chris_oleman/" rel="noreferrer">
              <FaInstagram />
            </a>
          </span>
          <span className="bannerIcon">
            <a href="https://wa.me/+250790801063" rel="noreferrer">
              <FaWhatsapp />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
