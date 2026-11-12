import { textColor1, textColor2 } from "@/utils/colors.utils";
import {
  PiCrownSimpleDuotone,
  PiChalkboardTeacherDuotone,
  PiHandHeartDuotone,
  PiGraduationCapDuotone,
  PiChartLineUpDuotone,
} from "react-icons/pi";

export const services = [
  {
    title: "Luxury Learning Environment",
    description:
      "Experience a premium, fully equipped academy designed to simulate real salon and studio settings for immersive professional training.",
    icon: <PiCrownSimpleDuotone size={32} />,
  },
  {
    title: "Certified & Experienced Trainers",
    description:
      "Learn directly from certified beauty experts and industry professionals dedicated to shaping confident, career-ready artists.",
    icon: <PiChalkboardTeacherDuotone size={32} />,
  },
  {
    title: "100% Practical & Hands-On Training",
    description:
      "Each course blends theory with live demonstrations, model practice, and personalized mentoring to ensure real skill development.",
    icon: <PiHandHeartDuotone size={32} />,
  },
  {
    title: "Beginner Friendly Courses ",
    description:
      "Our courses are designed for beginners as well as learners who want to upgrade their skills. Step-by-step training makes learning easy, clear, and practical.",
    icon: <PiGraduationCapDuotone size={32} />,
  },
  {
    title: "Career, Support & Growth Opportunities",
    description:
      "Receive career guidance, portfolio support, and internship opportunities to start your journey as a professional beauty artist.",
    icon: <PiChartLineUpDuotone size={32} />,
  },
];
