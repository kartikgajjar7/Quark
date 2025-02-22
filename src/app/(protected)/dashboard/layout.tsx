import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { SessionProvider } from "next-auth/react";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <SidebarProvider>
        <AppSidebar />

        <main className="w-full bg-[rgb(25,25,25)] flex flex-col items-center justify-start overflow-hidden">
          {children}
        </main>
      </SidebarProvider>
    </SessionProvider>
  );
}
