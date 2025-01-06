// ScoreContext.js
import React, { createContext, useState, useContext } from "react";

const ScoreContext = createContext();

export function ScoreProvider({ children }) {
  const [itSupportScore, setItSupportScore] = useState(0);
  const [softwareDevScore, setSoftwareDevScore] = useState(0);
  const [dataAnalystScore, setDataAnalystScore] = useState(0);
  const [cyberSecurityScore, setCyberSecurityScore] = useState(0);
  const [webDevScore, setWebDevScore] = useState(0);
  const [uxuiScore, setUxuiScore] = useState(0);
  const [networkScore, setNetworkScore] = useState(0);
  const [projectManagerScore, setProjectManagerScore] = useState(0);


  return (
    <ScoreContext.Provider
      value={{
        itSupportScore,
        setItSupportScore,
        softwareDevScore,
        setSoftwareDevScore,
        dataAnalystScore,
        setDataAnalystScore,
        cyberSecurityScore,
        setCyberSecurityScore,
        webDevScore,
        setWebDevScore,
        uxuiScore,
        setUxuiScore,
        networkScore,
        setNetworkScore,
        projectManagerScore,
        setProjectManagerScore,
      }}
    >
      {children}
    </ScoreContext.Provider>
  );
}

export function useScore() {
  return useContext(ScoreContext);
}