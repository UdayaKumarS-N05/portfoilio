import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
function Nav() {
  return (
    <div className="flex justify-between items-center p-4  sm:px-28 mt-2 mb-6">
      <div>
        <Link to="/" className="bg-yellow-400 flex gap-1 ">
          <span className="text-orange-500">Udaya</span>
          <span className="text-green-700-500">Kumar.</span>
        </Link>
      </div>
      <ul className="flex items-center justify-evenly gap-4">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
      </ul>
      <div className="flex items-center justify-evenly gap-4">
        <span>
          <a href="https://github.com/UdayaKumarS-N05" target="_blank">
            <FaGithub />
          </a>
        </span>
        <span>
          <a href="https://www.linkedin.com/in/udaya-kumar-s/" target="_blank">
            <FaLinkedin />
          </a>
        </span>
      </div>
    </div>
  );
}

export default Nav;
