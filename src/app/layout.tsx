import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// 1. Initialize the font and set up the CSS variable
const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter" 
});

export const metadata: Metadata = {
  title: "Your App Title",
  description: "Your app description",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // 2. Apply the font variable to the HTML tag
    <html lang="en" className={inter.variable}>
      {/* 3. Ensure there are NO <link href="...fonts.googleapis..."> tags here */}
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
}