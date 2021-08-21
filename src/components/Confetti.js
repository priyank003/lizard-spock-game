import React from "react";

import Confetti from "react-confetti";

import { useState, useEffect } from "react";

const Confet = () => {
  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }

  function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(
      getWindowDimensions()
    );

    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowDimensions;
  }
  const { width, height } = useWindowDimensions();
  return (
    <Confetti
      width={width}
      height={height}
      style={{ margin: "0", height: "100vh", width: "100%" }}
    />
  );
};

export default Confet;
