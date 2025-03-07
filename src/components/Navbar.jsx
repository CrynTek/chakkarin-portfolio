
import { Link } from "react-scroll";


function Navbar() {
  return (
    <nav className=" fixed top-0 left-1/2 transform -translate-x-1/2 bg-stone-900 p-4 w-4/5 mb-auto rounded-b-lg shadow-lg">
      <ul className="flex flex-wrap justify-around text-white w-full md:w-auto space-x-4 md:space-x-8 font-ibm">
        <li>
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="hover:text-blue-100 hover:underline transition duration-300"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="education"
            smooth={true}
            duration={500}
            className="hover:text-blue-100 hover:underline transition duration-300"
          >
            Education
          </Link>
        </li>

        <li>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="hover:text-blue-100 hover:underline transition duration-300"
          >
            Project
          </Link>
        </li>
        <li>
          <Link
            to="footer"
            smooth={true}
            duration={500}
            className="hover:text-blue-100 hover:underline transition duration-300"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
