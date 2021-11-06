import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import LandingPage from "./components/ui /landing-page/LandingPage";
import { Slide, Typography } from "@mui/material";
import Mieter from "./components/mieter/Mieter";
import Owner from "./components/owner/Owner";
import Organisation from "./components/organisation/Organisation";

function App() {
  const [choice, setChoice] = useState("none");
  const [showLandingPage, setShowLandingPage] = useState(false);

  let ret = <></>;

  useEffect(() => {
    switch (choice) {
      case "mieter":
        ret = <Mieter />;
        setShowLandingPage(true);
        break;
      case "eigentuemer":
        ret = <Mieter />;
        setShowLandingPage(true);
        break;
      case "organisation":
        ret = <Mieter />;
        setShowLandingPage(true);
        break;
      default:
        setShowLandingPage(false);
        break;
    }
  }, [choice]);

  return (
    <div className="App" style={{ height: '100vh', overflow: 'auto', backgroundColor: "#95C22B" }}>
      
      {!showLandingPage && (
        <LandingPage choice={choice} setChoice={setChoice} />
      )}

      
      {showLandingPage && <Owner />}
    </div>
  );
}

export default App;
