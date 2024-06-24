import { useEffect, useState } from "react";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  const returnData = {
    isMobile,
  };

  const handleResize = () => {
    const isMobile = window.innerWidth <= 768;
    setIsMobile(isMobile);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
  }, []);

  return returnData;
};

export { useIsMobile };
