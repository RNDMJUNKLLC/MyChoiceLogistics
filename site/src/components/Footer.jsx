import React from "react";

export default function Footer({ phone }){
  return (
    <footer className="bg-gray-100 text-gray-700 py-8">
      <div className="max-w-5xl mx-auto px-4 text-sm">
        <div className="flex flex-col md:flex-row md:justify-between gap-4">
          <div>
            <strong>My Choice Logistics LLC</strong>
            <div>Serving VA · MD · PA · NJ</div>
            <div>Phone: <a href={`tel:${phone}`} className="text-primary">{phone}</a></div>
          </div>
          <div>
            <div className="font-semibold">Compliance</div>
            <p>No PHI is collected via this website. For HIPAA-sensitive requests, please call us directly.</p>
          </div>
        </div>

        <div className="mt-6 text-xs text-gray-500">
          &copy; {new Date().getFullYear()} My Choice Logistics LLC. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
