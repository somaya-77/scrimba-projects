
import Navbar from "./Navbar";
import Main from "./Main";
import './style.css';
import { useState } from "react";

export default function WarmUp() {
  const [mode, setMode] = useState(false)

  function toggleDarkMode() {
    setMode(!mode)
  }
    return (
      <div className="page">
        <div className="container">
            <Navbar mode={mode} toggleDarkMode={toggleDarkMode}/>
            <Main mode={mode}/>
        </div>
      </div>
    )
}