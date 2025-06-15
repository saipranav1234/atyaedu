import gsap from "gsap";
import { useEffect } from "react";

// Preloader Animation
export const preLoaderAnim = () => {
  gsap.fromTo(
    ".span-1",
    {
      y: 20, // Start from below
      opacity: 0, // Hidden initially
    },
    {
      y: 0, // Move to normal position
      opacity: 1, // Fade in
      duration: 1,
      delay: 0.5,
      ease: "power3.out",
    }
  );
};
