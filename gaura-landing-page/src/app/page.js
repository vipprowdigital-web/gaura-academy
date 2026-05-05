"use client";

import Courses from "@/components/Courses";
import HeroSection from "@/components/HeroSection";

import Services from "@/components/Services";
import CareerTransformation from "@/components/CareerTransformation";
import StudentWorkGallery from "@/components/StudentWorkGallery";
import Placement from "@/components/Placement";
import Accreditions from "@/components/Accreditions";
import AdminProcessTimeline from "@/components/AdminProcessTimeline";
import ContactForm from "@/components/ContactForm";
import { useRef } from "react";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import BottomNavbar from "@/components/BottomNavbar";
import { Toaster } from "react-hot-toast";
import AboutAcademy from "@/components/About";

export default function Home() {
  const contactRef = useRef(null);
  const exploreCourses = useRef(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToCourses = () => {
    exploreCourses.current?.scrollIntoView({ behavior: "smooth" });
  };
  // bg-[#F7F7EE]
  return (
    <main className="bg-black">
      <HeroSection
        onContactClick={scrollToContact}
        onCourseClick={scrollToCourses}
      />
      
      <AboutAcademy/>
      <div ref={exploreCourses}>
        <Courses onContactClick={scrollToContact} />
      </div>
      <Services />

      <CareerTransformation />
      <StudentWorkGallery />
      <Testimonials/>
      {/* <Placement /> */}
      {/* <Accreditions /> */}
      <AdminProcessTimeline />
      {/* <Testimonials /> */}
      <div ref={contactRef}>
        <ContactForm />
      </div>
      <BottomNavbar
        onContactClick={scrollToContact}
        onCourseClick={scrollToCourses}
      />
      <Footer />
      <Toaster position="top-center" reverseOrder={false} />
    </main>
  );
}
