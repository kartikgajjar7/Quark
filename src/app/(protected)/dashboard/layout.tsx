import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/sidebar/app-sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full bg-[rgb(25,25,25)] flex flex-col items-center justify-start overflow-hidden">
        {children}
      </main>
    </SidebarProvider>
  );
}
