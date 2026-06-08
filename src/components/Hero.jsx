export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-white min-h-screen flex items-center">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        <div>
          <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full">
            Advanced Dentistry for Every Smile.
          </span>

          <h1 className="text-5xl md:text-7xl font-bold mt-6 leading-tight">
            Make Your Perfect
            <span className="text-blue-600"> Smile </span>
            Even Better
          </h1>

          <p className="mt-6 text-gray-600 text-lg">
          Dedicated to creating healthy, confident smiles through modern dentistry, personalized care, and a patient-first approach.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-full">
             <a href="#appointment">Book Appointment</a>
            </button>

            <button className="border px-8 py-4 rounded-full">
              Learn More
            </button>
          </div>
        </div>

        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09"
            alt=""
            className="rounded-3xl shadow-2xl"
          />

          <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-xl">
            <h3 className="font-bold">2500+</h3>
            <p className="text-gray-500 text-sm">
              Happy Patients
            </p>
          </div>

          <div className="absolute top-8 -right-6 bg-white p-5 rounded-2xl shadow-xl">
            <h3 className="font-bold">4.9 ★</h3>
            <p className="text-gray-500 text-sm">
              Patient Rating
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}