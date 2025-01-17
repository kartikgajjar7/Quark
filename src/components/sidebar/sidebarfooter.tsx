import React from "react";
import {
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "../ui/sidebar";
import { ChevronUp } from "lucide-react";
import { auth, signOut } from "@/auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
export const SidebarFootercomp = async () => {
  const session = await auth();
  const firstName = session?.user?.name?.split(" ")[0] || "";
  if (session === null) return <h1>load</h1>;
  return (
    <SidebarFooter>
      <SidebarMenu>
        <SidebarMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarMenuButton className="flex flex-row justify-between items-center">
                <h1>{firstName}</h1>
                <ChevronUp />
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>{session.user.name}</DropdownMenuLabel>
              <p className="text-xs ml-2  ">{session.user.email}</p>
              <DropdownMenuSeparator />

              <DropdownMenuItem>
                Profile
                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
              </DropdownMenuItem>

              <DropdownMenuItem
                onClick={async () => {
                  "use server";
                  try {
                    await signOut({
                      redirectTo: "/",
                    });
                  } catch (error) {
                    console.error("Sign out error:", error);
                    throw error;
                  }
                }}
              >
                Log out
                <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>
  );
};
