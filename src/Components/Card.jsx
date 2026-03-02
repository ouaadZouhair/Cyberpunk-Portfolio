import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Modal from "./Modal";

const overlayVariants = {
  initial: { opacity: 0 },
  hover: { opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
};

const slideUp = {
  initial: { y: 40, opacity: 0 },
  hover: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const imageVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.15, transition: { duration: 0.6, ease: "easeOut" } },
};

const Card = ({ project, key }) => {
  const { t } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div
        key={key}
        className={`relative bg-black/30 backdrop-blur-lg border-[3px] overflow-hidden ${
          !project.featured
            ? "border-secondary/50 hover:border-secondary hover:shadow-secondary/40"
            : "border-highlight/50 hover:border-highlight hover:shadow-highlight/60"
        }  hover:shadow-lg transition-all duration-500`}
        initial="initial"
        whileHover="hover"
         onClick={() => setIsOpen(true)}
      >
        <div className="relative h-auto overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover object-center"
            variants={imageVariants}
          />

          <motion.div
            className="absolute inset-0  backdrop-blur-xs flex flex-col items-center justify-center gap-2"
            variants={overlayVariants}
          >
            {/* <motion.h3
              className={`text-4xl font-bold text-white mb-2 text-center`}
              variants={slideUp}
            >
              {project.title}
            </motion.h3> */}
            {/* <motion.div className="flex gap-4 mt-2" variants={slideUp}>
              <button
                    onClick={() => setIsOpen(true)}
                    className={`px-3 py-2 text-lg font-semibold text-highlight border-4  border-highlight bg-transparent hover:bg-highlight hover:text-white transition cursor-pointer`}
                >
                    {t("View Details")}
                </button>
            </motion.div> */}
          </motion.div>
        </div>
      </motion.div>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        project={project}
      />
    </>
  );
};

export default Card;
