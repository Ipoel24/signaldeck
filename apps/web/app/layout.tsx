import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Serif } from "next/font/google";
import { AppShell } from "@/components/app-shell";
import "./globals.css";

const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex-sans",
});

const serif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-ibm-plex-serif",
});

export const metadata: Metadata = {
  title: {
    default: "SignalDeck",
    template: "%s · SignalDeck",
  },
  description: "Your personal intelligence feed for the open web.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable} antialiased`}>
      <body className="min-h-dvh font-sans">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
