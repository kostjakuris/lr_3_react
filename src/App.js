import React from "react";
import Review from "./Review";
import { AiOutlineGithub } from "react-icons/ai";
function App() {
  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>Our reviews</h2>
          <div className="inderline"></div>
        </div>
        <Review />
      </section>
    </main>
  );
}
export default App;
