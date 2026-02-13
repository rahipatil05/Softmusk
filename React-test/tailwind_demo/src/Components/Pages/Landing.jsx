import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./landing.css";

const Landing = () => {
  const [videoEnded, setVideoEnded] = useState(false);
  const [skipIntro, setSkipIntro] = useState(false);

  // 🔁 Check if intro already played
//   useEffect(() => {
//     const played = localStorage.getItem("introPlayed");
//     if (played) {
//       setSkipIntro(true);
//       setVideoEnded(true);
//     }
//   }, []);

  // When video ends
  const handleVideoEnd = () => {
    localStorage.setItem("introPlayed", "true");
    setVideoEnded(true);
  };

  return (
    <div className="landing">

      {/* 🎬 Intro Video (only first time) */}
      <AnimatePresence>
        {!videoEnded && !skipIntro && (
          <motion.div
            className="video-wrapper"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
          >
            <video
              src="../../../public/intro.mp4"
              autoPlay
              muted
              playsInline
              onEnded={handleVideoEnd}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 🏷 Title Screen */}
      <AnimatePresence>
        {videoEnded && (
          <motion.div
            className="title-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            <motion.h1
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
            >
              MY WEBSITE
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Landing;
