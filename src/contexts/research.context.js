import { createContext, useContext } from "react";

const DEFAULT_RESEARCH_CONTEXT = {
  research: null,
  setResearch: () => {},
  result: [],
  setResult: () => {},
};

export const ResearchContext = createContext(DEFAULT_RESEARCH_CONTEXT);

export const useResearch = () => useContext(ResearchContext);
