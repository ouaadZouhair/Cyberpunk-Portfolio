import { useState, useRef, useEffect } from "react";
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
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef(null);

  // Cached images may finish loading before React attaches onLoad.
  useEffect(() => {
    if (imgRef.current?.complete) {
      setIsLoaded(true);
    }
  }, []);

  return (
    <>
      <motion.div
        key={key}
        className={`relative bg-black/30 backdrop-blur-lg border-4 overflow-hidden ${
          !project.featured
            ? "border-secondary/50 hover:border-secondary hover:shadow-secondary/40"
            : "border-highlight/50 hover:border-highlight hover:shadow-highlight/60"
        }  hover:shadow-lg transition-all duration-500`}
        initial="initial"
        whileHover="hover"
         onClick={() => setIsOpen(true)}
      >
        <div
          className={`relative w-full overflow-hidden ${
            isLoaded ? "h-[180px] md:h-auto" : "h-[180px] md:h-[260px]"
          }`}
        >
          {!isLoaded && (
            <div className="absolute inset-0 bg-white/5 overflow-hidden">
              <div
                className={`absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent ${
                  project.featured ? "via-highlight/10" : "via-secondary/10"
                } to-transparent`}
              />
            </div>
          )}

          <motion.img
            ref={imgRef}
            src={project.image}
            alt={project.title}
            loading="lazy"
            onLoad={() => setIsLoaded(true)}
            className={`w-full h-full object-cover object-center transition-opacity duration-500 ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
            variants={imageVariants}
          />
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
