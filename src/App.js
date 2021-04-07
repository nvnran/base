import React, { useEffect } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";

const App = () => {
  const title = window.location.href.replace("https://", "").replace("/", "");

  useEffect(() => {
    document.title = title;
  }, []);

  return (
    <>
      <div className="container">
        <Header title={title} />
        <Home title={title} />
        <Footer />
      </div>
    </>
  );
};

export default App;
