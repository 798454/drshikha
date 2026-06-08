
export default function DoctorProfile() {
  return (
    <section id="doctor" className="py-24 bg-blue-50">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        <img
          src="/src/assets/shikha.png"
          alt=""
          className="rounded-3xl"
        />

        <div>
         <div>
  <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
    Dr. Shikha Patel
  </h2>

  <div className="flex items-center gap-3 mt-3">
    <div className="w-12 h-[2px] bg-blue-600"></div>

    <p className="text-lg italic text-blue-600 font-semibold">
      Dental Surgeon
    </p>
  </div>
</div>

          <p className="mt-6 text-gray-600">
         Experienced Dental Surgeon specializing in cosmetic dentistry, dental implants, and preventive care, dedicated to delivering exceptional patient experiences and confident, healthy smiles.

          </p>

          <div className="mt-8 flex gap-8">
            <div>
              <h3 className="font-bold text-3xl">2+</h3>
              <p>Years Experience</p>
            </div>

            <div>
              <h3 className="font-bold text-3xl">2500+</h3>
              <p>Patients</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}