import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react'
import Alerts from './components/Alerts';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);


  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      setAlert({
        message: "Dark mod enable",
        type: 'success'
      });

      setTimeout(() => {
        setAlert(null);
      }, 3000);
    }
    else {
      setMode('light');
      setAlert({
        message: "Light mod enable",
        type: 'success'
      });

      setTimeout(() => {
        setAlert(null);
      }, 1500);
    }
  }

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
  }
  return (
    <div>
      <Router>
        <Navbar title="Mysite" mode={mode} toggleMode={toggleMode} />
        <Alerts alert={alert} />
        <Routes>
          <Route exact path="/" element={<Textform showAlert={showAlert} />}></Route>
          <Route exact path="/about" element={<About />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
