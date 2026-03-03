import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import LanguageSwitcher from "../ui/LanguageSwitcher";
import ScrambleText from "./ScrambleText";

const Navbar = ({ pageIndex, pageNames, pagesLength, handlePrev, handleNext }) => {
  return (
    <nav className="fixed top-4 left-0 right-0 flex items-center justify-center z-20">
      <div className="relative w-full flex justify-center items-center">
        <div className="flex items-center gap-1 bg-black/15 p-1">
          <button
            onClick={handlePrev}
            disabled={pageIndex === 0}
            className="group flex items-center gap-2 bg-white border-2 border-transparent text-black backdrop-blur-sm transition-all duration-300 ease-out hover:scale-105 hover:bg-highlight disabled:hover:bg-white disabled:hover:scale-100 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <MdOutlineKeyboardArrowLeft size={40} />
          </button>

          <div className="flex gap-2 px-3 mx-auto rounded-full">
            <h1 className="text-3xl font-digital md:text-4xl text-center font-semibold bg-transparent p-2 text-white border-2shadow-lg shadow-primary/40">
             <ScrambleText text={pageNames[pageIndex].toUpperCase()} className="text-white" />
            </h1>
          </div>

          <button
            onClick={handleNext}
            disabled={pageIndex === pagesLength - 1}
            className="group flex items-center gap-2 bg-white border-2 border-transparent text-black backdrop-blur-sm transition-all duration-300 ease-out hover:scale-105 hover:bg-highlight disabled:hover:bg-white disabled:hover:scale-100 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <MdOutlineKeyboardArrowRight size={40} />
          </button>
        </div>

        <LanguageSwitcher />
      </div>
    </nav>
  );
};

export default Navbar;
