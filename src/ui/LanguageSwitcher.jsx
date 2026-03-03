import { useTranslation } from "react-i18next";
import AnimatedBtn from "../Components/AnimatedBtn";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "fr" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="absolute right-4 top-1/2 -translate-y-1/2 flex">
      {/* <AnimatedBtn text={i18n.language === "fr" ? "EN" : "FR"} onClick={toggleLanguage} className="group flex items-center justify-center gap-2 bg-white border-2 border-transparent text-black backdrop-blur-sm transition-all duration-300 ease-out hover:scale-105 hover:bg-highlight font-bold font-digital w-10 h-10 text-center text-2xl " textColor="text-black" /> */}
      
      
      <button  onClick={toggleLanguage} className="border-2 border-white font-digital font-semibold text-gray-900 w-10 h-10 p-0 m-0 bg-white text-2xl duration-100 hover:bg-highlight hover:border-highlight hover:scale-105 hover:cursor-pointer">
        {i18n.language === "fr" ? "EN" : "FR"}
      </button>
    </div>
  );
};      

export default LanguageSwitcher;
