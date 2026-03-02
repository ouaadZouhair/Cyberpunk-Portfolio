import React from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "./Modal.css";

const backdrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.25 } },
  exit: { opacity: 0, transition: { duration: 0.25 } },
};

const modal = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: "easeOut" } },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.25, ease: "easeIn" } },
};

export default function Modal({ isOpen, onClose, project }) {
  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm flex justify-center items-center z-50"
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={onClose}
        >
          <motion.div
            className={`modal-window relative bg-black text-black dark:text-white rounded-xl shadow-xl max-w-lg w-[90%]  overflow-hidden`}
            variants={modal}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Animated border */}
            <div className="border-piece"></div>

            {/* macOS window top bar */}
            <div className="flex items-center gap-2 px-4 py-2 border-b-2 border-gray-200 bg-gray-200">
              <div
                onClick={onClose}
                className="w-3 h-3 bg-red-500 rounded-full cursor-pointer hover:scale-105 duration-100 hover:brightness-125"
              />
              <div className="w-3 h-3 bg-yellow-400 rounded-full" />
              <div className="w-3 h-3 bg-green-500 rounded-full" />
            </div>

             <img
                src={project.image}
                alt={project.title}
                className="w-full  mb-4"
              />

            {/* Modal content */}
            <div className="font-tech p-6">
             

              <h2 className="text-2xl font-bold mb-2">{project.title}</h2>

              <p className="text-gray-700 dark:text-gray-300 mb-3 text-justify">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mt-3 mb-5">
                {project.technologies?.map((tech, i) => (
                  <span
                    key={i}
                    className={`${
                      project.featured
                        ? "bg-highlight/20 text-highlight"
                        : "bg-secondary/20 text-secondary"
                    } px-3 py-1 rounded-md text-sm`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons for GitHub and Demo */}
              <div className="flex justify-center gap-4 mt-6">
                {/* GitHub Button */}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors bg-white text-black hover:bg-white/80`}
                  >
                    <FaGithub className="text-lg" /> GitHub
                  </a>
                )}

                {/* Demo Button */}
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors bg-white text-black hover:bg-white/80`}
                  >
                    <FaExternalLinkAlt className="text-lg" /> Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
