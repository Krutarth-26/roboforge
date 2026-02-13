import React from "react";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#0d0f14] text-[#f0f2f5] antialiased">
        {children}
      </body>
    </html>
  );
}