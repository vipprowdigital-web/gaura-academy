import { DM_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
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

// Google Tag Manager container ID (can be overridden with NEXT_PUBLIC_GTM_ID)
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || "GTM-KRQ4GMRJ";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${dmSans.variable} h-full antialiased`}>
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `}
        </Script>
      </head>
      <body className="min-h-full flex flex-col">
        {/* Google Tag Manager (noscript) - must be right after <body> */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {children}
      </body>
    </html>
  );
}
