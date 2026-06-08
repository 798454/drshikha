import { useState } from "react";
import { FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="font-bold text-2xl text-blue-600">
          Dr. Shikha Patel
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 font-medium">
          <a href="#services" className="hover:text-blue-600">Services</a>
          <a href="#doctor" className="hover:text-blue-600">Doctor</a>
          <a href="#reviews" className="hover:text-blue-600">Reviews</a>
          <a href="#appointment" className="hover:text-blue-600">Appointment</a>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          
          {/* Call Button */}
          <a
            href="tel:+916351299493"
            className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg hover:scale-110 transition"
          >
            <FaPhoneAlt size={18} />
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="flex flex-col p-4 space-y-4">
            <a
              href="#services"
              onClick={() => setIsOpen(false)}
              className="hover:text-blue-600"
            >
              Services
            </a>

            <a
              href="#doctor"
              onClick={() => setIsOpen(false)}
              className="hover:text-blue-600"
            >
              Doctor
            </a>

            <a
              href="#reviews"
              onClick={() => setIsOpen(false)}
              className="hover:text-blue-600"
            >
              Reviews
            </a>

            <a
              href="#appointment"
              onClick={() => setIsOpen(false)}
              className="hover:text-blue-600"
            >
              Appointment
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}