import "./globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VybeOS — How It Works",
  description:
    "VybeOS keeps your brand safe and precise, every step of the loop is built to protect your tone, your visuals, and your standards.",
};

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <main>{children}</main>
      </body>
    </html>
  );
}
