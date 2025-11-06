import { useEffect } from "react";
import { Wrench, Bolt, ShieldCheck, Clock, PhoneCall, Sparkles } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Main() {
  useEffect(() => {
    AOS.init({ duration: 900, offset: 120, once: true });
  }, []);

  return (
    <main className="bg-white text-gray-900">

      {/* --- Intro Section --- */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 data-aos="fade-up" className="text-4xl md:text-5xl font-extrabold text-center mb-6 text-red-800">
          Trusted Electrical Experts for Home & Business
        </h2>
        <p data-aos="fade-up" className="text-center max-w-3xl mx-auto text-lg leading-relaxed text-gray-700">
          We specialize in safe, reliable, and long-lasting electrical solutions. Whether it’s emergency repair,
          planned installation, smart home setup, or commercial electrical maintenance — our certified electricians
          deliver clean workmanship and professional service every time.
        </p>
      </section>

      {/* --- Services Grid --- */}
      <section className="bg-gray-50 py-24 border-y">
        <div className="max-w-6xl mx-auto px-6">
          <h3 data-aos="fade-up" className="text-3xl font-bold text-center mb-14 text-gray-900">
            Our Core Services
          </h3>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              { icon: Bolt, title: "Emergency Electrical Repairs", desc: "Immediate response to outages, tripping circuits, burnt wiring & hazards." },
              { icon: Wrench, title: "Installations & Upgrades", desc: "New outlets, rewiring, panel upgrades, distribution boards & equipment setup." },
              { icon: Sparkles, title: "Lighting Design & Smart Systems", desc: "LED upgrades, home automation, garden lighting, motion systems, dimmers & ambiance." },
              { icon: ShieldCheck, title: "Safety Certification & Testing", desc: "Load testing, wiring assessment, compliance reports & safety approvals." },
              { icon: Clock, title: "Preventive Maintenance Plans", desc: "Regular inspections to prevent breakdowns & improve efficiency." },
              { icon: PhoneCall, title: "Rapid Local Support", desc: "Our technicians are strategically located to minimize response time." },
            ].map((item, index) => (
              <div key={index} data-aos="fade-up" className="p-8 bg-white rounded-xl shadow hover:shadow-xl transition border">
                <item.icon className="w-12 h-12 text-red-800 mb-4" />
                <h4 className="font-semibold text-lg mb-2 text-gray-900">{item.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- About Section --- */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div data-aos="fade-right">
            <h3 className="text-3xl font-bold mb-4 text-red-800">Who We Are</h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              We are a licensed and insured electrical services provider with years of hands-on experience
              working across residential, commercial, and industrial projects. Our team follows strict safety
              standards and delivers solutions built to last. No quick fixes — just clean work done right.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li>• Certified & Registered Electricians</li>
              <li>• Transparent Pricing — No Hidden Charges</li>
              <li>• Fast Response Teams Available Day & Night</li>
            </ul>
          </div>

          <div data-aos="fade-left" className="bg-gray-100 h-64 md:h-full rounded-xl shadow-inner"></div>
        </div>
      </section>

      {/* --- Stats / USP --- */}
      <section className="bg-gray-50 py-24 border-y">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-14 text-red-800">Why Customers Trust Us</h3>

          <div className="grid md:grid-cols-4 gap-10 text-center">
            {[
              { value: "30–90 min", label: "Average Response Time" },
              { value: "No Callout Fee", label: "Charges Only When Work Begins" },
              { value: "12 Months", label: "Service Guarantee" },
              { value: "24/7", label: "Emergency Support" },
            ].map((stat, i) => (
              <div key={i} data-aos="zoom-in" className="p-8 bg-white rounded-xl shadow border">
                <h4 className="text-2xl font-bold text-red-800">{stat.value}</h4>
                <p className="text-gray-700 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Testimonials --- */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-14 text-red-800">What Our Clients Say</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Arrived quickly and fixed the issue professionally. Excellent service!",
              "High quality installation work. Clean, neat and clearly experienced.",
              "Affordable and honest. Will definitely call again when needed.",
            ].map((review, i) => (
              <div key={i} data-aos="fade-up" className="p-8 bg-gray-50 border rounded-xl shadow">
                “{review}”
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="py-24 bg-red-700 mb-30 text-white text-center">
        <h3 className="text-3xl font-bold mb-4">Need an Electrician Right Now?</h3>
        <p className="max-w-2xl mx-auto text-lg mb-8 opacity-90">
          We are available 24/7 for emergency support & scheduled services. No call-out fees.
        </p>
        <button className="px-12 py-4 bg-white text-red-800 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition">
          Request a Call Back
        </button>
      </section>

    </main>
  );
}
