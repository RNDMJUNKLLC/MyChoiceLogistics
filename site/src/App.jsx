import React from "react";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Process from "./components/Process";
import FAQ from "./components/FAQ";
import ContactBar from "./components/ContactBar";
import Footer from "./components/Footer";

export default function App(){
  const phone = "908 - 636 - 3926";
  return (
    <div className="min-h-screen flex flex-col">
      <ContactBar phone={phone} />
      <main className="flex-grow">
        <Hero phone={phone} />
        <section className="max-w-5xl mx-auto px-4 py-12">
          <Services />
          <Process />
          <FAQ />
        </section>
      </main>
      <Footer phone={phone} />
    </div>
  );
}
