import {
  FaTooth,
  FaSmile,
  FaTeeth,
  FaClinicMedical,
} from "react-icons/fa";

import ServiceCard from "./ServiceCard";

const services = [
  {
    icon: FaTooth,
    title: "Dental Implants",
    description:
      "Permanent tooth replacement solutions that look and feel natural.",
  },
  {
    icon: FaSmile,
    title: "Teeth Whitening",
    description:
      "Brighten your smile with safe and effective whitening treatments.",
  },
  {
    icon: FaTeeth,
    title: "Orthodontics",
    description:
      "Straighten teeth and improve alignment with modern braces.",
  },
  {
    icon: FaClinicMedical,
    title: "Root Canal",
    description:
      "Pain-free root canal treatment using advanced technology.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 bg-gradient-to-b from-white to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold">
            OUR SERVICES
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Complete Dental Care
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            We provide comprehensive dental treatments using modern
            technology and personalized care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}