import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
// import ServiceCard from "../components/ServiceCard";
import DoctorProfile from "../components/DoctorProfile";
import Testimonials from "../components/Testimonials";
import Appointment from "../components/Appointment";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <DoctorProfile />
      <Services />
      {/* <ServiceCard /> */}
      <Testimonials />
      <Appointment />
      <Footer />
      <WhatsAppButton />
    </>
  );
}