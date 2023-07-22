import React, { useState } from "react";
import "./App.css";
// import { About } from "./component/About";
import { Navbar } from "./component/Navbar.jsx";
import { TextForm } from "./component/TextForm.jsx";
import { Alert } from "./component/Alert";

function App() {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
    }
  };
  return (
    <>
      <div className="contaier">
        <Navbar title="Rohit" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-5">
          <TextForm
            showAlert={showAlert}
            heading="Enter your Analysis"
            mode={mode}
          />
          {/* <About /> */}
        </div>
      </div>
    </>
  );
}

export default App;
