import React from "react";

export default function ContactBar({ phone }){
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <a href={`tel:${phone}`} className="bg-accent text-white px-4 py-3 rounded-full shadow-lg flex items-center gap-3">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M22 16.92V21a1 1 0 0 1-1.1 1A19 19 0 0 1 2 4.1 1 1 0 0 1 3 3h4.09a1 1 0 0 1 1 .75c.2 1 .6 2.5 1.4 3.8a1 1 0 0 1-.2 1.1L8.5 10.5a16 16 0 0 0 6 6l1.9-1.7a1 1 0 0 1 1.1-.2c1.3.8 2.8 1.2 3.8 1.4a1 1 0 0 1 .75 1V21z" stroke="#fff" strokeWidth="0.8"/></svg>
        <span className="font-medium">Call {phone}</span>
      </a>
    </div>
  );
}
