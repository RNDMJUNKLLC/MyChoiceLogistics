import React from "react";

const services = [
  { title: "Same-day medical courier", desc: "Fast, reliable same-day pickups and deliveries." },
  { title: "Refrigerated transport (cold chain)", desc: "Temperature-controlled transport with chain-of-custody." },
  { title: "Specimen pickup & delivery", desc: "Secure specimen handling and hand-off documentation." },
  { title: "Scheduled routes", desc: "Recurring pickups for labs and clinics." },
  { title: "Emergency / after-hours", desc: "24/7 emergency service when you need it most." }
];

export default function Services(){
  return (
    <section aria-labelledby="services-heading" className="py-8">
      <h2 id="services-heading" className="text-2xl font-bold mb-4">Our Services</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map(s=>(
          <div key={s.title} className="p-4 border rounded-lg bg-white/60">
            <h3 className="font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
