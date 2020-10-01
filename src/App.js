import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import AsidePanel from "./AsidePanel";

function App() {
  return (
    <div className="App">
      <Header userId="monikkar" userName="Monikka" isAdmin="false" />
      <AsidePanel isAdmin="false" />
      <Footer />
    </div>
  );
}

export default App;
