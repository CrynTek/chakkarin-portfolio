import { FaGithub, FaFacebook} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <footer id="footer" className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-6">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-zinc-400 text-center">

          {/* Facebook */}
          <li className="w-full max-w-xs mx-auto h-24 py-4  hover:border-2 flex flex-col items-center rounded-md">
            <a href="https://web.facebook.com/cakrin.s.ma.citr.suriya/" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-2xl" />
              <div className="text-sm sm:text-base mt-2">จักริน ษมาจิตรสุริยา</div>
            </a>
          </li>

          {/* Email */}
          <li className="w-full max-w-xs mx-auto h-24 py-4 hover:border-2 flex flex-col items-center rounded-md">
            <a href="mailto:Chakkarinsmchit@gmail.com">
              <MdEmail className="text-2xl">EMAIL</MdEmail>
              <div className="text-sm sm:text-base mt-2">Chakkarinsmchit@gmail.com</div>
            </a>
          </li>

          {/* GitHub */}
          <li className="w-full max-w-xs mx-auto h-24 py-4 hover:border-2 flex flex-col items-center  rounded-md">
            <a href="https://github.com/CrynTek" target="_blank" rel="noopener noreferrer">
              <FaGithub className=" text-2xl" /> 
              <div className="text-sm sm:text-base mt-2">github.com/CrynTek</div>
            </a>
          </li>

        </ul>
      </div>
    </footer>
  );
}

export default Footer;
