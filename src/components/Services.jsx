import {
  FaTooth,
  FaSmile,
  FaTeeth,
  FaClinicMedical,
  FaChild,
  FaHeartbeat,
  FaXRay,
} from "react-icons/fa";

const services = [
  {
    icon: <FaClinicMedical size={36} />,
    title: "Comprehensive Dental Checkups",
    description: "Complete oral examinations and personalized treatment planning.",
  },
  {
    icon: <FaTooth size={36} />,
    title: "Preventive & Family Dentistry",
    description: "Routine cleanings and preventive care for all age groups.",
  },
  {
    icon: <FaSmile size={36} />,
    title: "Cosmetic Smile Makeovers",
    description: "Enhance your smile with modern cosmetic dentistry solutions.",
  },
  {
    icon: <FaSmile size={36} />,
    title: "Teeth Whitening",
    description: "Professional whitening treatments for a brighter smile.",
  },
  {
    icon: <FaClinicMedical size={36} />,
    title: "Root Canal Treatment",
    description: "Advanced pain-free root canal procedures.",
  },
  {
    icon: <FaTooth size={36} />,
    title: "Dental Crowns & Bridges",
    description: "Restore damaged or missing teeth naturally.",
  },
  {
    icon: <FaTooth size={36} />,
    title: "Dental Implants",
    description: "Permanent and natural-looking tooth replacement.",
  },
  {
    icon: <FaTeeth size={36} />,
    title: "Wisdom Tooth Extraction",
    description: "Safe removal of impacted wisdom teeth.",
  },
  {
    icon: <FaHeartbeat size={36} />,
    title: "Gum Disease Treatment",
    description: "Comprehensive periodontal therapy and care.",
  },
  {
    icon: <FaChild size={36} />,
    title: "Pediatric Dental Care",
    description: "Friendly dental care tailored for children.",
  },
  {
    icon: <FaHeartbeat size={36} />,
    title: "Emergency Dental Care",
    description: "Immediate treatment for dental emergencies.",
  },
  {
    icon: <FaXRay size={36} />,
    title: "Digital X-Ray Diagnostics",
    description: "Accurate diagnosis using advanced digital imaging.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 bg-gradient-to-b from-white to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold">
            OUR SERVICES
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-6">
            Advanced Dental Care
          </h2>

          <p className="text-gray-500 max-w-3xl mx-auto mt-4">
            We provide comprehensive dental solutions using modern technology,
            personalized care, and a commitment to creating healthy,
            confident smiles.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition">
                {item.icon}
              </div>

              <h3 className="font-bold text-lg text-gray-800 mb-3">
                {item.title}
              </h3>

              <p className="text-gray-500 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        
      </div>
    </section>
  );
}