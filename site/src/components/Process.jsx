import React from "react";

const steps = [
  { title: "1. Request Pickup", desc: "Call our dispatch to schedule a pickup." },
  { title: "2. Secure Transport", desc: "We maintain chain-of-custody and cold-chain as required." },
  { title: "3. Confirm Delivery", desc: "Signature and documentation upon hand-off." }
];

export default function Process(){
  return (
    <section aria-labelledby="process-heading" className="py-8">
      <h2 id="process-heading" className="text-2xl font-bold mb-4">How Our Medical Courier Works</h2>
      <p className="text-sm mb-6 max-w-3xl">We make medical specimen pickup and delivery simple with phone-first scheduling, HIPAA-safe handling, and same-day refrigerated transport when needed.</p>
      <div className="space-y-4">
        {steps.map(s=>(
          <div key={s.title} className="p-4 bg-gray-50 rounded-lg">
            <h4 className="font-semibold">{s.title}</h4>
            <p className="text-sm mt-1">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
