import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type React from "react";
import CustomCursor from '../components/CustomCursor';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "mijust Portfolio",
  description: "A showcase of my work and skills",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <CustomCursor />
          {children}
      </body>
    </html>
  )
}