import { createContext, useState } from "react";
import React from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const [feedback] = useState([
        {
            id: 1,
            text: "This is a test feedback",
            rating: 5,
        }
    ]);
  return (
    <FeedbackContext.Provider value={{
       feedback
    }}>{children}</FeedbackContext.Provider>
  );
};

export default FeedbackContext;


