import { FaGithub } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className="text-white text-center">
      <div className="bg-[#032541] py-3">
        <p className="mb-3">Contact Us</p>
        <div className="flex gap-3 justify-center">
          <a
            href="https://github.com/sholikul92"
            target="blank"
            className="opacity-70 hover:opacity-100"
          >
            <FaGithub size={25} />
          </a>
          <a href="https://instagram.com/s.ardian642" target="blank">
            <LuInstagram size={25} className="opacity-70 hover:opacity-100"/>
          </a>
          <a href="https://wa.me/6283807201787" target="blank">
            <FaWhatsapp size={25} className="opacity-70 hover:opacity-100"/>
          </a>
          <a href="https://sholikul92.github.io/portfolio/" target="blank">
            <CiGlobe size={25} className="opacity-70 hover:opacity-100"/>
          </a>
        </div>
      </div>
      <div className="bg-[#01112C] py-3">
        <span className="opacity-80">Copyright &copy;2024; Created by </span>
        <span className="font-semibold"> Sholikul</span>
      </div>
    </footer>
  );
};

export default Footer;
