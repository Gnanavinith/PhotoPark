// src/context/frameContext.jsx
import React, { createContext, useState } from "react";

export const FrameContext = createContext();

export const FrameProvider = ({ children }) => {
  const [frame, setFrame] = useState(null);

  return (
    <FrameContext.Provider value={{ frame, setFrame }}>
      {children}
    </FrameContext.Provider>
  );
};
