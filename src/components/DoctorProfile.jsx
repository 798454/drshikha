import doctorImage from "../assets/shikha.png";

export default function DoctorProfile() {
  return (
    <section
      id="doctor"
      className="py-24 bg-gradient-to-b from-blue-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
            Meet Your Doctor
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-gray-900">
            Expert Dental Care You Can Trust
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Providing personalized dental treatments with compassion,
            precision, and modern technology to help patients achieve
            healthier and more confident smiles.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Doctor Image */}
          <div className="relative">
            <div className="absolute -inset-4 bg-blue-200 rounded-3xl blur-2xl opacity-30"></div>

            <img
              src={doctorImage}
              alt="Dr. Shikha Patel"
              className="relative w-full rounded-3xl shadow-2xl object-cover hover:scale-[1.02] transition duration-500"
            />
          </div>

          {/* Doctor Content */}
          <div>

            <span className="text-blue-600 font-semibold tracking-wide uppercase">
              Dental Surgeon
            </span>

            <h3 className="mt-3 text-4xl md:text-5xl font-bold text-gray-900">
              Dr. Shikha Patel
            </h3>

            <div className="w-24 h-1 bg-blue-600 rounded-full mt-5"></div>

            <p className="mt-8 text-lg leading-relaxed text-gray-600">
              Dr. Shikha Patel is a dedicated Dental Surgeon committed
              to providing exceptional oral healthcare. With expertise
              in cosmetic dentistry, preventive treatments, restorative
              procedures, and patient-centered care, she focuses on
              delivering healthy smiles and long-lasting dental wellness.
            </p>

            <p className="mt-5 text-lg leading-relaxed text-gray-600">
              Using advanced dental technologies and modern treatment
              techniques, she ensures a comfortable, safe, and pleasant
              experience for every patient.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mt-10">

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 hover:-translate-y-1 transition">
                <h4 className="text-4xl font-bold text-blue-600">
                  2+
                </h4>
                <p className="mt-2 text-gray-600">
                  Years Experience
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 hover:-translate-y-1 transition">
                <h4 className="text-4xl font-bold text-blue-600">
                  2500+
                </h4>
                <p className="mt-2 text-gray-600">
                  Happy Patients
                </p>
              </div>

            </div>

            {/* Button */}
            <div className="mt-10">
              <a
                href="#appointment"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition duration-300 shadow-lg"
              >
                Book Appointment
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}