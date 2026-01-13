import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fuel - Your All-in-One Fitness Companion | Launching 2026",
  description:
    "Track workouts, compete with friends, and reach your fitness goals with Fuel. Smart coaching, social leaderboards, and comprehensive health tracking. Join the waitlist for early access.",
  keywords: "fitness app, workout tracker, calorie tracking, fitness social network, health app",
  authors: [{ name: "Faheem Mekrani" }],
  openGraph: {
    title: "Fuel - Your All-in-One Fitness Companion",
    description: "Track workouts, compete with friends, and reach your fitness goals. Launching 2026.",
    type: "website",
    url: "https://fuel.app",
    images: [{ url: "/og-image.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fuel - Your All-in-One Fitness Companion",
    description: "Track workouts, compete with friends, and reach your fitness goals. Launching 2026.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className={`${inter.className} bg-white text-slate-900`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
