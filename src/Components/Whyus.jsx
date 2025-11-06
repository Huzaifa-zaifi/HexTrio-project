import React, { useEffect } from "react";
import { Award, Users, Clock, ShieldCheck, Zap, Wrench } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function WhyUs() {
  useEffect(() => {
    AOS.init({ duration: 900, offset: 120 });
  }, []);

  return (
    <section id="why-us" className="bg-white text-gray-900 py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div data-aos="fade-up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-wide text-red-800">
            Why Apollo Electrical Contractors
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Apollo delivers reliable electrical maintenance, installations, and emergency repair
            services for homes and businesses. We operate with the core principles of trust,
            craftsmanship, and absolute professionalism.
          </p>
        </div>

        {/* Two-Image About Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-24">
          
          <div data-aos="fade-right">
            <img
              src="/images/rel.jpg"
              alt="Apollo Team"
              className="rounded-xl shadow-xl w-full h-[350px] object-cover"
            />
          </div>

          <div data-aos="fade-left" className="space-y-4">
            <h3 className="text-3xl font-semibold text-red-800">Our Story & Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              Apollo Electrical Contractors was founded to ensure power systems are safe, efficient,
              and expertly serviced. We’ve grown from small-scale local support to working with businesses,
              residential estates, and industrial clients across multiple regions.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our team is committed to carrying out work that maintains safety standards and ensures
              reliable electrical performance — whether it’s routine maintenance or urgent emergency callouts.
            </p>
          </div>
        </div>

        {/* Reverse Layout */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-24">

          <div data-aos="fade-right" className="space-y-4">
            <h3 className="text-3xl font-semibold text-red-800">Reliable Response, Anytime</h3>
            <p className="text-gray-700 leading-relaxed">
              We operate round-the-clock with fast dispatch teams ready to assist. When electrical
              issues occur, our engineers respond immediately with the right equipment and expertise.
            </p>
          </div>

          <div data-aos="fade-left">
            <img
              src="/images/deal.jpg"
              alt="Electrical Work"
              className="rounded-xl shadow-xl w-full h-[350px] object-cover"
            />
          </div>

        </div>

        {/* Values / Feature Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
          
          {[
            { icon: ShieldCheck, title: "Certified & Insured", desc: "Compliant with all safety standards." },
            { icon: Clock, title: "24/7 Support", desc: "Emergency-ready response teams." },
            { icon: Users, title: "Experienced Engineers", desc: "Skilled professionals you can trust." },
            { icon: Zap, title: "Fast Turnaround", desc: "Quick solutions, no compromise on quality." },
            { icon: Wrench, title: "Modern Tools", desc: "Prepared for any electrical requirement." },
            { icon: Award, title: "Reputation Built on Trust", desc: "We stand behind every project." },
          ].map((item, idx) => (
            <div
              key={idx}
              data-aos="zoom-in"
              className="p-6 bg-red-50 rounded-xl shadow hover:shadow-md hover:-translate-y-1 transition"
            >
              <item.icon className="w-12 h-12 mx-auto mb-3 text-red-800" />
              <h4 className="font-semibold text-lg text-red-900">{item.title}</h4>
              <p className="text-gray-600 text-sm mt-2">{item.desc}</p>
            </div>
          ))}

        </div>
          {/* CTA */}
<div data-aos="fade-up" className="mt-20 text-center">
  <a
    href="tel:+123456789"
    className="inline-block px-12 py-4 bg-red-800 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-red-700 hover:shadow-xl transition-transform hover:-translate-y-1"
  >
    Speak to an Electrician Now
  </a>
</div>

      </div>
      
    </section>
  );
}
