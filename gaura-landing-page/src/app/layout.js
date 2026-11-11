import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Gaura Makeup Academy",
  description:
    "Gaura Makeup Academy is a luxury beauty academy offering practical makeup training, a global curriculum and expert mentorship.",
  icons: {
    icon: "/assets/images/gaura/GAURA.png",
    shortcut: "/assets/images/gaura/GAURA.png",
    apple: "/assets/images/gaura/GAURA.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
