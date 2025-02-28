import type { Metadata } from "next";
import "../globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";

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
    <html lang="zh">
      <body>
        <ProtectedRoute>
          <div className="min-h-screen bg-gray-50">
            <Navbar />
            <main className="container mx-auto px-4 pt-20">
              {children}
            </main>
          </div>
        </ProtectedRoute>
      </body>
    </html>
  );
}
