import { FaUser, FaEnvelope, FaPhoneAlt, FaCalendarAlt } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";
export default function Appointment() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:5000/api/appointments",
        formData
      );

      alert("Appointment Booked Successfully!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        message: "",
      });
      }
        catch (error) {
  console.log("FULL ERROR:", error);

  if (error.response) {
    console.log("Response Data:", error.response.data);
    console.log("Status:", error.response.status);
  }

  alert("Failed to book appointment");
}
  };


    return (
    <section
      id="appointment"
      className="relative py-24 bg-gradient-to-br from-blue-600 via-cyan-500 to-blue-800 overflow-hidden"
    >
      {/* Background Blur Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-300/10 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div className="text-white">
          <span className="bg-white/20 px-4 py-2 rounded-full text-sm">
            Schedule Your Visit
          </span>

          <h2 className="text-5xl md:text-6xl font-bold mt-6 leading-tight">
            Book Your
            <span className="text-cyan-200"> Dental Appointment</span>
          </h2>

          <p className="mt-6 text-blue-100 text-lg">
            Experience modern dentistry with personalized care,
            advanced technology, and a comfortable environment.
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-3">
              ✅ Same Day Appointments
            </div>

            <div className="flex items-center gap-3">
              ✅ Emergency Dental Care
            </div>

            <div className="flex items-center gap-3">
              ✅ Experienced Specialists
            </div>
          </div>
        </div>

        {/* Form Card */}
        <div className="backdrop-blur-xl bg-white/15 border border-white/20 p-8 rounded-3xl shadow-2xl">

          <h3 className="text-3xl font-bold text-white mb-6">
            Get Appointment
          </h3>

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Name */}
            <div className="relative">
              <FaUser className="absolute left-4 top-4 text-gray-500" />
              <input
                className="w-full pl-12 p-4 rounded-xl bg-white text-gray-800 outline-none"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                required
               />

            
            </div>

            {/* Email */}
            <div className="relative">
              <FaEnvelope className="absolute left-4 top-4 text-gray-500" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                 className="w-full pl-12 p-4 rounded-xl bg-white text-gray-800"
              />
            </div>

            {/* Phone */}
            <div className="relative">
              <FaPhoneAlt className="absolute left-4 top-4 text-gray-500" />
              <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="w-full pl-12 p-4 rounded-xl bg-white text-gray-800 outline-none"
              />
            </div>

           <div className="grid md:grid-cols-2 gap-4">
  {/* Date */}
  <div>
    <label className="block text-white text-sm mb-2">
      Appointment Date
    </label>

    <input
      type="date"
      name="date"
      value={formData.date}
      onChange={handleChange}
      className="w-full p-4 rounded-xl bg-white text-gray-800"
    />
  </div>

  {/* Time */}
  <div>
    <label className="block text-white text-sm mb-2">
      Preferred Time
    </label>

    <input
      type="time"
      name="time"
      value={formData.time}
      onChange={handleChange}
      className="w-full p-4 rounded-xl bg-white text-gray-800"
    />
  </div>
</div>

            {/* Message */}
            <textarea
               name="message"
               value={formData.message}
               onChange={handleChange}
               rows="4"
               placeholder="Tell us about your dental concern..."
               className="w-full p-4 rounded-xl bg-white text-gray-800"
            />

           <button
               type="submit"
                className="w-full bg-white text-blue-600 font-bold py-4 rounded-xl"
            >
               Book Appointment
             </button>
          </form>
        </div>
      </div>
    </section>
  );
}