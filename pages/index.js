import { CoinMarketProvider } from "../context/context";
import { useEffect } from "react";
import Header from "./components/section-components/Header";
import CoinTable from "./components/section-components/CoinTable";
import Hero from "./components/section-components/Hero";
import { ThemeProvider } from "@material-tailwind/react";
import Compare from "./Compare";
import Footer from "./components/section-components/Footer";

export default function Home() {
  useEffect(() => {
    if (
      localStorage.theme === "light" ||
      (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Whenever the user explicitly chooses light mode
    localStorage.theme = "light";

    // Whenever the user explicitly chooses dark mode
    localStorage.theme = "dark";

    // Whenever the user explicitly chooses to respect the OS preference
    localStorage.removeItem("theme");
  });

  return (
    <>
      <ThemeProvider>
        <CoinMarketProvider>
          <div id="page" className="bg-body">
            <Header />

            <Hero />

            <CoinTable />
            <Compare />
            <Footer />
          </div>
        </CoinMarketProvider>
      </ThemeProvider>
    </>
  );
}
