// import { motion } from "framer-motion";
// import {
//   FiArrowRight,
//   FiShield,
//   FiCheckCircle,
// } from "react-icons/fi";

// function ServiceCard() {
//   return (
//     <section className="relative min-h-screen flex items-center overflow-hidden gradient-bg">

//       <div className="absolute inset-0 opacity-10">
//         <img
//           src="/hero-bg.jpg"
//           alt=""
//           className="w-full h-full object-cover"
//         />
//       </div>

//       <div className="container-custom relative z-10">

//         <div className="grid lg:grid-cols-2 gap-12 items-center">

//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7 }}
//           >

//             <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 px-4 py-2 rounded-full mb-6">

//               <FiShield />

//               Trusted Sterilization Solutions
//             </div>

//             <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-slate-900">

//               Advanced
//               <span className="text-sky-600">
//                 {" "}Sterilization
//               </span>

//               <br />

//               Packaging For Healthcare
//             </h1>

//             <p className="mt-8 text-lg text-slate-600 max-w-xl">

//               Premium sterilization rolls,
//               pouches, indicators and CSSD
//               consumables designed for
//               hospitals, dental clinics and
//               healthcare institutions.

//             </p>

//             <div className="flex flex-wrap gap-4 mt-10">

//               <button className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-4 rounded-xl flex items-center gap-2 transition">

//                 Request Quote

//                 <FiArrowRight />
//               </button>

//               <button className="border border-slate-300 px-8 py-4 rounded-xl hover:bg-slate-50 transition">

//                 Download Catalog
//               </button>

//             </div>

//             <div className="flex flex-wrap gap-8 mt-10">

//               <div className="flex items-center gap-2">
//                 <FiCheckCircle className="text-green-600" />
//                 ISO Quality
//               </div>

//               <div className="flex items-center gap-2">
//                 <FiCheckCircle className="text-green-600" />
//                 CSSD Approved
//               </div>

//               <div className="flex items-center gap-2">
//                 <FiCheckCircle className="text-green-600" />
//                 Medical Grade
//               </div>

//             </div>

//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 70 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//           >

//             <div className="glass-card rounded-3xl p-8">

//               <img
//                 src="/products/sterilization-roll.jpg"
//                 alt="Sterilization Roll"
//                 className="rounded-2xl w-full h-[500px] object-cover"
//               />

//             </div>

//           </motion.div>

//         </div>

//       </div>
//     </section>
//   );
// }

// export default ServiceCard;