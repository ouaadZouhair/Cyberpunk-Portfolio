import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "fr" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="absolute right-4 -bottom-4 top-1/2 -translate-y-1/2 flex hover:cursor-pointer">
      <button  onClick={toggleLanguage} className="text-gray-900 w-10 h-10 p-0 m-0 bg-white font-medium text-lg duration-100 hover:bg-highlight hover:scale-105 hover:cursor-pointer">
        {i18n.language === "fr" ? "EN" : "FR"}
      </button>
    </div>
  );
};      

export default LanguageSwitcher;
