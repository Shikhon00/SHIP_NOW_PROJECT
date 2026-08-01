import type { ReactNode } from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { Footer } from "@/components/layout/Footer";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen bg-canvas">
      <Sidebar />

      <div className="ml-64 flex min-h-screen flex-1 flex-col">
        <main className="mx-auto w-full max-w-[1600px] flex-1 px-8 py-8">
          {children}
        </main>
        <div className="mx-auto w-full max-w-[1600px] px-8">
          <Footer />
        </div>
      </div>
    </div>
  );
}
