export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 text-center">

        

        <p className="mt-6 text-gray-500">
          © 2026 All Rights Reserved by Shikha patel 
        </p>

      </div>
    </footer>
  );
}

// import {
//   FaLinkedin,
//   FaFacebook,
//   FaInstagram,
//   FaWhatsapp,
//   FaPhoneAlt,
//   FaEnvelope,
//   FaMapMarkerAlt,
// } from "react-icons/fa";

// import { Link } from "react-router-dom";

// function Footer() {
//   return (
//     <footer className="bg-slate-950 text-white">

//       {/* Top CTA Section */}
//       <div className="border-b border-slate-800">

//         <div className="container-custom py-16">

//           <div className="bg-gradient-to-r from-sky-600 to-cyan-600 rounded-3xl p-10 lg:p-14">

//             <div className="flex flex-col lg:flex-row justify-between items-center gap-8">

//               <div>
//                 <h2 className="text-3xl lg:text-4xl font-bold">
//                   Ready To Upgrade Your
//                   Sterilization Process?
//                 </h2>

//                 <p className="mt-4 text-sky-100 max-w-2xl">
//                   Get premium sterilization rolls,
//                   pouches, indicators and CSSD
//                   consumables for your healthcare facility.
//                 </p>
//               </div>

//               <button className="bg-white text-sky-700 font-semibold px-8 py-4 rounded-xl hover:scale-105 transition">
//                 Request A Quote
//               </button>

//             </div>

//           </div>

//         </div>

//       </div>

//       {/* Main Footer */}
//       <div className="container-custom py-20">

//         <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">

//           {/* Company */}
//           <div>

//             <h3 className="text-3xl font-bold text-sky-400">
//               CSSD<span className="text-white">Pro</span>
//             </h3>

//             <p className="mt-5 text-slate-400 leading-relaxed">
//               Trusted supplier of sterilization rolls,
//               pouches, indicators and CSSD consumables
//               helping healthcare facilities maintain
//               the highest standards of infection control.
//             </p>

//             <div className="flex gap-4 mt-6">

//               <a
//                 href="#"
//                 className="bg-slate-800 hover:bg-sky-600 p-3 rounded-xl transition"
//               >
//                 <FaLinkedin />
//               </a>

//               <a
//                 href="#"
//                 className="bg-slate-800 hover:bg-sky-600 p-3 rounded-xl transition"
//               >
//                 <FaFacebook />
//               </a>

//               <a
//                 href="#"
//                 className="bg-slate-800 hover:bg-sky-600 p-3 rounded-xl transition"
//               >
//                 <FaInstagram />
//               </a>

//               <a
//                 href="#"
//                 className="bg-slate-800 hover:bg-sky-600 p-3 rounded-xl transition"
//               >
//                 <FaWhatsapp />
//               </a>

//             </div>

//           </div>

//           {/* Quick Links */}
//           <div>

//             <h4 className="text-xl font-semibold mb-6">
//               Quick Links
//             </h4>

//             <ul className="space-y-4 text-slate-400">

//               <li>
//                 <Link
//                   to="/"
//                   className="hover:text-sky-400 transition"
//                 >
//                   Home
//                 </Link>
//               </li>

//               <li>
//                 <Link
//                   to="/about"
//                   className="hover:text-sky-400 transition"
//                 >
//                   About Us
//                 </Link>
//               </li>

//               <li>
//                 <Link
//                   to="/products"
//                   className="hover:text-sky-400 transition"
//                 >
//                   Products
//                 </Link>
//               </li>

//               <li>
//                 <Link
//                   to="/blog"
//                   className="hover:text-sky-400 transition"
//                 >
//                   Blog
//                 </Link>
//               </li>

//               <li>
//                 <Link
//                   to="/contact"
//                   className="hover:text-sky-400 transition"
//                 >
//                   Contact
//                 </Link>
//               </li>

//             </ul>

//           </div>

//           {/* Products */}
//           <div>

//             <h4 className="text-xl font-semibold mb-6">
//               Product Categories
//             </h4>

//             <ul className="space-y-4 text-slate-400">

//               <li className="hover:text-sky-400 transition cursor-pointer">
//                 Sterilization Rolls
//               </li>

//               <li className="hover:text-sky-400 transition cursor-pointer">
//                 Sterilization Pouches
//               </li>

//               <li className="hover:text-sky-400 transition cursor-pointer">
//                 Indicator Tapes
//               </li>

//               <li className="hover:text-sky-400 transition cursor-pointer">
//                 Chemical Indicators
//               </li>

//               <li className="hover:text-sky-400 transition cursor-pointer">
//                 CSSD Consumables
//               </li>

//             </ul>

//           </div>

//           {/* Contact */}
//           <div>

//             <h4 className="text-xl font-semibold mb-6">
//               Contact Information
//             </h4>

//             <div className="space-y-5 text-slate-400">

//               <div className="flex gap-3 items-start">
//                 <FaMapMarkerAlt className="text-sky-400 mt-1" />
//                 <span>
//                   Ahmedabad, Gujarat, India
//                 </span>
//               </div>

//               <div className="flex gap-3 items-center">
//                 <FaPhoneAlt className="text-sky-400" />
//                 <span>+91 99999 99999</span>
//               </div>

//               <div className="flex gap-3 items-center">
//                 <FaEnvelope className="text-sky-400" />
//                 <span>info@yourcompany.com</span>
//               </div>

//             </div>

//           </div>

//         </div>

//       </div>

//       {/* Bottom Footer */}
//       <div className="border-t border-slate-800">

//         <div className="container-custom py-6 flex flex-col md:flex-row justify-between items-center gap-4">

//           <p className="text-slate-500 text-center md:text-left">
//             © {new Date().getFullYear()} CSSDPro.
//             All Rights Reserved.
//           </p>

//           <div className="flex gap-6 text-slate-500 text-sm">

//             <a href="#">
//               Privacy Policy
//             </a>

//             <a href="#">
//               Terms & Conditions
//             </a>

//             <a href="#">
//               Sitemap
//             </a>

//           </div>

//         </div>

//       </div>

//     </footer>
//   );
// }

// export default Footer;