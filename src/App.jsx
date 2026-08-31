import { useState } from "react";

import "./App.css";

import CreditCard from "./components/CreditCard/CreditCard";
import CardForm from "./components/CardForm/CardForm";
import ThemeSelector from "./components/ThemeSelector/ThemeSelector";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [cardData, setCardData] = useState({
    name: "",
    number: "",
    expiry: "",
    cvv: "",
  });

  const [theme, setTheme] = useState("midnight");

  return (
    <>
      <Header />

      <main className="app">
        <section className="credit-card-section">
          <div className="card-container">
            <CreditCard cardData={cardData} theme={theme} />
          </div>

          <div className="form-container">
            <CardForm cardData={cardData} setCardData={setCardData} />
            <ThemeSelector theme={theme} setTheme={setTheme} />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;
