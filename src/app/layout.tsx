import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["italic", "normal"],
  variable: "--font-cormorant",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#F7F3EC",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "DYVOLA — Your Moments, Made Lasting",
  description: "Digital Moments Platform. Create a beautiful digital wedding invitation experience around the moments that matter most.",
  keywords: ["DYVOLA", "Digital Wedding Invitation", "Undangan Digital", "Digital Moments Platform", "Wedding Invitation"],
  authors: [{ name: "DYVOLA" }],
  icons: {
    icon: "/images/logo/dyvola-symbol.png",
    apple: "/images/logo/dyvola-symbol.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${manrope.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#F7F3EC] text-[#242326] font-sans selection:bg-[#6E2C3A] selection:text-[#F7F3EC]">
        {children}
      </body>
    </html>
  );
}
