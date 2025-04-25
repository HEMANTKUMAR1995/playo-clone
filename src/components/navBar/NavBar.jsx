import { useState } from "react";
import { FaSun, FaUser } from "react-icons/fa";
import { MdOutlineSportsTennis } from "react-icons/md";
import { RiTrainLine } from "react-icons/ri";
import LoginSignupModal from "../Modals/LoginSignup";

const Navbar = () => {
  const [modalActive, setModalActive] = useState(false);
  return (
    <nav className="flex items-center justify-between p-4 shadow-md">
      <div className="text-green-600 font-bold text-2xl">PLAY0</div>

      <div className="flex gap-10 text-gray-600">
        <div className="flex items-center gap-1 cursor-pointer hover:text-green-600">
          <FaSun />
          <span>Play</span>
        </div>
        <div className="flex items-center gap-1 cursor-pointer hover:text-green-600">
          <MdOutlineSportsTennis />
          <span>Book</span>
        </div>
        <div className="flex items-center gap-1 cursor-pointer hover:text-green-600">
          <RiTrainLine />
          <span>Train</span>
        </div>
      </div>

      <div className="flex items-center gap-2 cursor-pointer hover:text-green-600">
        <FaUser />
        <span onClick={() => setModalActive(true)}>Login / Signup</span>
      </div>
      <LoginSignupModal
        isOpen={modalActive}
        onClose={() => setModalActive(false)}
      />
    </nav>
  );
};

export default Navbar;
