import type { Metadata } from "next";
import { Prompt, Nunito } from "next/font/google";

const prompt = Prompt({
  variable: "--heading-font",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const nunito = Nunito({
  variable: "--body-font",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

// bootstrap five
import "bootstrap/dist/css/bootstrap.min.css";

// font awesome 5 pro icons
import "@/public/icons/css/font-awesome.css";

// main styles
import "@/public/scss/app.scss";

export const metadata: Metadata = {
  title: "The Artur Travel - Travel & Tour Booking ",
  description: "The Artur Travel is a modern travel and tour booking website template designed for travel agencies, tour operators, and vacation planners. It features a clean and responsive design with various sections for showcasing tours, destinations, and travel services.",
  keywords: ["booking", "tour", "travel", "travel agency", "trip", "vacation"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${prompt.variable} ${nunito.variable}`}>
        {children}
      </body>
    </html>
  );
}
