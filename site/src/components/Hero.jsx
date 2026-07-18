import React from "react";

export default function Hero({ phone }){
  return (
    <header className="bg-gradient-to-r from-primary to-accent text-white py-20">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-4">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M3 5v14h18V5H3z" stroke="#fff" strokeWidth="1.2"/></svg>
          </div>
          <div className="text-left">
            <h1 className="text-3xl md:text-4xl font-bold">24 hour medical courier</h1>
            <p className="mt-1">Package deliveries & specimen transport serving VA · MD · PA · NJ</p>
          </div>
        </div>

        <div className="mt-8">
          <a href={`tel:${phone}`} className="inline-block bg-white text-primary font-semibold px-6 py-3 rounded-lg shadow">
            Call Now: {phone}
          </a>
        </div>

        <p className="mt-6 text-sm max-w-xl mx-auto">
          We do not collect PHI through this website. For HIPAA-sensitive requests, please call us directly.
        </p>
      </div>
    </header>
  );
}
