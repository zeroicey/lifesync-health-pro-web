import type { Metadata } from "next";
import "../globals.css";
import { Navbar } from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "LifeSync Health Pro",
  description: "Your Personal Health Management Assistant",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="pt-16 mt-6 mx-4">{children}</main>
      </body>
    </html>
  );
}
