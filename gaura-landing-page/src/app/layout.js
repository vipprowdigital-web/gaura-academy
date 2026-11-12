import "./globals.css";

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
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300..800;1,9..40,300..800&display=swap"
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
