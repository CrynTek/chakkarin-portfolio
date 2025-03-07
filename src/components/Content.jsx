import { Link } from "react-scroll";
import Chakkarin from "../assets/Chakkarin.jpg";

function Content() {
  return (
    <div id="home" className="flex items-center w-full h-screen bg-stone-950 py-8 ">
      <div className="flex justify-center items-center h-2/3">
        <div className="flex flex-col justify-center font-ibm w-1/3 mx-20">
          <div className="text-[#F7F7F7]">Hi! I'm</div>
          <div className="font-bold text-4xl text-[#F7F7F7] mb-4">
            Chakkarin Smachitsuriya
          </div>
          <div className="text-gray-400">Web Developer.</div>
          <div className="text-gray-400">
            สวัสดี! ผมชื่อ จักริน ษมาจิตรสุริยา สนใจใน Backend Development และ
            Full-Stack Development ปัจจุบันกำลังพัฒนาทักษะใน Spring Boot,
            Node.js, React.js, และ MySQL เพื่อสร้างแอปพลิเคชันที่มีประสิทธิภาพ
          </div>
          <div className="bg-[#FFB22C] rounded-lg mt-4 w-fit px-2">
            <Link
              to="projects"
              smooth={true}
              duration={2000}
              className="cursor-pointer py-2 text-white font-bold block text-center hover:underline"
            >
              &gt; Projects &lt;
            </Link>
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center items-center">
          <img
            className="w-100 h-100 md:w-60 md:h-60 object-cover rounded-full"
            src={Chakkarin}
            alt="Profile"
          />
        </div>
      </div>
    </div>
  );
}

export default Content;
