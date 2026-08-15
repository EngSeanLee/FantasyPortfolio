import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/navigation/Nav";
import { NavRail } from "@/components/navigation/NavRail";
import { LivingEnvironment } from "@/components/environment/LivingEnvironment";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "EngSean Lee — AI Solutions Architecture & Process Strategy",
    template: "%s — EngSean Lee",
  },
  description:
    "EngSean Lee designs intelligent workflows, decision-support tools, and operational systems that improve visibility, consistency, and execution.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col text-sage-dark">
        <LivingEnvironment />
        <Nav />
        <NavRail />
        {/* Reserves space for the fixed left rail at desktop widths. The
            Footer is intentionally not global — it only appears on
            /resume, the one conventional, fully-scrolling page. */}
        <main className="flex-1 lg:pl-44">{children}</main>
      </body>
    </html>
  );
}
