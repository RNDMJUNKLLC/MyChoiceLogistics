import React from "react";

const faqs = [
  {
    question: "What areas do you serve?",
    answer: "We serve healthcare providers and labs across Virginia, Maryland, Pennsylvania, and New Jersey with medical courier and specimen transport services."
  },
  {
    question: "Do you offer same-day medical courier service?",
    answer: "Yes. We provide same-day medical courier pickups and deliveries for urgent specimens, lab work, and medical shipments."
  },
  {
    question: "Can you handle refrigerated specimen transport?",
    answer: "Absolutely. We offer temperature-controlled, cold chain delivery for sensitive specimens and medical packages."
  },
  {
    question: "How do I schedule a pickup?",
    answer: "Call our dispatch line to schedule a pickup. We keep the process phone-first to preserve HIPAA-safe intake and fast response."
  },
  {
    question: "Do you provide emergency after-hours courier service?",
    answer: "Yes. Our emergency medical courier service is available 24/7 for urgent lab samples, specimens, and time-sensitive deliveries."
  }
];

export default function FAQ(){
  return (
    <section aria-labelledby="faq-heading" className="py-8">
      <h2 id="faq-heading" className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq) => (
          <div key={faq.question} className="p-5 border rounded-xl bg-white/70">
            <h3 className="font-semibold">{faq.question}</h3>
            <p className="mt-2 text-sm leading-6">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
