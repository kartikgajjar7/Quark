import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";
import { Button } from "../ui/button";
import { auth, signOut } from "@/auth";
import { NotebookPen } from "lucide-react";
import { BookText } from "lucide-react";
import { SidebarFootercomp } from "./sidebarfooter";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar";

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },

  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

const docsportion = [
  {
    title: "Class Notes",
    url: "#",
    icon: NotebookPen,
  },
  {
    title: "Assignments",
    url: "#",
    icon: NotebookPen,
  },
  {
    title: "Lecture Slides",
    url: "#",
    icon: NotebookPen,
  },
  {
    title: "Study Material",
    url: "#",
    icon: NotebookPen,
  },
  {
    title: "Reference Books",
    url: "#",
    icon: NotebookPen,
  },
];

export async function AppSidebar() {
  const session = await auth();
  if (session === null) return <h1>load</h1>;
  if (!auth) <h1>here</h1>;
  console.log(auth, "hey");
  return (
    <Sidebar>
      <SidebarHeader className="border-b border-gray">
        <SidebarContent className="flex flex-row items-center justify-between">
          <Avatar className="w-6 h-6">
            <AvatarImage src={session.user.image as string} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <NotebookPen className="w-5" />
        </SidebarContent>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel className="text-sm font-semibold">
            Private
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {docsportion.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFootercomp />
    </Sidebar>
  );
}
