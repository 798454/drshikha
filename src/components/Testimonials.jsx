import { FaStar, FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Priya Shah",
    review:
      "Dr. Shikha Patel provided exceptional care during my root canal treatment. The procedure was painless, and the entire staff was professional and friendly.",
  },
  {
    name: "Rahul Patel",
    review:
      "I had my teeth whitening done here and the results were amazing. The clinic is modern, clean, and highly professional.",
  },
  {
    name: "Neha Mehta",
    review:
      "Highly recommended for family dental care. My child felt comfortable throughout the visit and received excellent treatment.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="reviews"
      className="py-24 bg-gradient-to-b from-white to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          

          <h2 className="text-4xl md:text-5xl font-bold mt-6">
            What Our Patients Say
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Trusted by patients for compassionate care, advanced treatments,
            and exceptional dental experiences.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <FaQuoteLeft className="text-blue-600 text-3xl mb-6" />

              <p className="text-gray-600 leading-relaxed">
                {item.review}
              </p>

              {/* Rating */}
              <div className="flex gap-1 mt-6 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              {/* Patient Info */}
              <div className="flex items-center gap-4 mt-6">
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                  {item.name.charAt(0)}
                </div>

                <div>
                  <h4 className="font-bold text-gray-800">
                    {item.name}
                  </h4>

                  <p className="text-sm text-gray-500">
                    Verified Patient
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}