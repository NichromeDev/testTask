import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { Header, Footer } from "./components";
import { useRoutes } from "./routes";

import "./App.scss";

function App() {
  const routes = useRoutes();
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container">{routes}</div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
