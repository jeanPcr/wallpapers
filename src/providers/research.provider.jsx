import { useState } from "react";
import { ResearchContext } from "../contexts/research.context";

export const ResearchProvider = (props) => {
  const [research, setResearch] = useState(null);
  const [result, setResult] = useState([]);
  return (
    <ResearchContext.Provider
      value={{ research, setResearch, result, setResult }}
    >
      {props.children}
    </ResearchContext.Provider>
  );
};
