import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Dashboard from './components/Dashboard.jsx';
import Authentication from './components/Authentication';

const App = () => {
  return (
    <BrowserRouter>
      <Header>
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<Authentication />} />
        </Routes>
      </Header>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
