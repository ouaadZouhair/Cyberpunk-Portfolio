import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import LanguageSwitcher from "../ui/LanguageSwitcher";

const Navbar = ({ pageIndex, pageNames, pagesLength, handlePrev, handleNext }) => {
  return (
    <nav className="fixed top-4 left-0 right-0 flex items-center justify-center z-20">
      <div className="relative w-full flex justify-center items-center">
        <div className="flex items-center gap-1">
          <button
            onClick={handlePrev}
            disabled={pageIndex === 0}
            className="group flex items-center gap-2 p-1 md:p-3  bg-black/50 border-2 border-primary text-primary font-tech backdrop-blur-sm transition-all duration-300 ease-out hover:scale-105 hover:shadow-[0_0_15px_rgba(0,255,231,0.5)] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <MdOutlineKeyboardArrowLeft size={30} />
          </button>

          <div className="flex gap-2 p-1 md:p-3 rounded-full">
            <h1 className="text-base md:text-xl font-semibold bg-primary p-2 text-dark border-2 border-primary shadow-lg shadow-primary/40">
              {pageNames[pageIndex]}
            </h1>
          </div>

          <button
            onClick={handleNext}
            disabled={pageIndex === pagesLength - 1}
            className="group flex items-center gap-2 p-1 md:p-3  bg-black/50 border-2 border-primary text-primary font-tech backdrop-blur-sm transition-all duration-300 ease-out hover:scale-105 hover:shadow-[0_0_15px_rgba(0,255,231,0.5)] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <MdOutlineKeyboardArrowRight size={30} />
          </button>
        </div>

        {/* Language Toggle */}
        <LanguageSwitcher />
      </div>
    </nav>
  );
};

export default Navbar;
