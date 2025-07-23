// src/hooks/useDeviceType.js
import { useState, useEffect } from "react";

export function useDeviceType() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDeviceType = () => {
      const mobile =
        navigator.userAgentData?.mobile ??
        /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
      setIsMobile(mobile);
    };

    checkDeviceType();
  }, []);

  return isMobile;
}
