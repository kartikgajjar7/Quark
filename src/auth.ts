import NextAuth, { DefaultSession } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import { getUserById } from "../data/user";
import authConfig from "./auth.config";
import db from "@/lib/db";

declare module "next-auth" {
  interface Session {
    user: {
      role: string;
      userId: string;
    } & DefaultSession["user"];
  }
}

const prisma = new PrismaClient();

export const { auth, handlers, signIn, signOut } = NextAuth({
  callbacks: {
    async jwt({ token }) {
      if (!token.sub) return token;
      const existingUser = await getUserById(token.sub);
      if (!existingUser) return token;
      token.role = existingUser.role;
      return token;
    },
    async session({ token, session }) {
      session.user.userId = token.sub as string;
      session.user.role = token.role as string;
      return session;
    },
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
});
