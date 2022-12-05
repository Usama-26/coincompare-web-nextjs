import { BarElement } from "chart.js";
import Image from "next/image";
import { Chart } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import HeroInput from "../HeroInput";
import heroImg from "./../../../assets/img/hero-img.svg";

function Hero() {
  return (
    <section className="text-gray-100 body-font bg-body">
      <div className="container mx-auto flex px-10 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-6xl text-3xl mb-4 font-medium">
            A trusted and secure
            <br /> cryptocurrency exchange.
          </h1>
          <p className="mb-8 leading-relaxed">
            Crypo is the most advanced UI kit for making the Blockchain platform. This kit comes with 4 different
            exchange page, market, wallet and many more
          </p>
          <HeroInput />
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image src={heroImg} alt="Hero Image" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
