import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Counter from "./components/Counter/Counter";
import UserDataForm from "./components/UserDataForm/UserDataForm";
import TextEditor from "./components/TextEditor/TextEditor";
import Dashboard from "./components/Dashboard/Dashboard";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate replace to="/dashboard" />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/form" element={<UserDataForm />} />
        <Route path="/editor" element={<TextEditor />} />
      </Routes>
    </Router>
  );
};

export default App;
