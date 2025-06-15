import { useEffect } from "react";
import gsap from "gsap";
import "./preloader.css";
import logo from './image.png';

const PreLoader = () => {
  useEffect(() => {
    // Disable scroll on mount
    document.body.style.overflow = "hidden";

    // GSAP Animations
    gsap.fromTo(
      ".preloaderlogo",
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.5, ease: "power3.out" }
    );

    const words1 = gsap.utils.toArray(".span-1 span");
    const words2 = gsap.utils.toArray(".span-2 span");

    gsap.fromTo(
      words1,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        delay: 1,
        ease: "power3.out",
      }
    );

    gsap.fromTo(
      words2,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        delay: 2,
        ease: "power3.out",
      }
    );

    gsap.to(".texts-container", {
      opacity: 0,
      duration: 0.5,
      delay: 4.5,
      ease: "power3.out",
      onComplete: () => {
        const preloader = document.querySelector(".texts-container");
        if (preloader) preloader.style.display = "none";

        // Re-enable scroll after animation ends
        document.body.style.overflow = "auto";
      },
    });

    // Clean up scroll blocking in case component unmounts early
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="texts-container">
      <div className="preloader-img">
        <img src={logo} alt="Logo" className="preloaderlogo" />
      </div>

      <div className="preloadercenter">
        <span className="span-1">
          {["Your", "dream", "our", "guidance"].map((word, i) => (
            <span key={i} className="word">{word}&nbsp;</span>
          ))}
        </span>
        <span className="span-2">
          {["Let's", "make", "it", "happen", "together."].map((word, i) => (
            <span key={i} className="word">{word}&nbsp;</span>
          ))}
        </span>
      </div>
    </div>
  );
};

export default PreLoader;
