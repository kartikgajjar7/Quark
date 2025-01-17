"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { registerSchema } from "../../../schema";
import { useRouter } from "next/navigation";
import FormError from "./Formerror";
import { DEFAULT_REDIRECT } from "@/routes";
import FormSuccess from "./Formsuccess";
import { useTransition } from "react";
import { register } from "../../../actions/auth";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormMessage,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export default function SignUpForm() {
  const [ispending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const router = useRouter();
  function onSubmit(values: z.infer<typeof registerSchema>) {
    startTransition(async () => {
      await register(values).then((res) => {
        setError(
          res?.error instanceof z.ZodError ? res.error.message : res?.error
        );
        setSuccess(
          res?.success
            ? "Account created kindlt log in with Credentials"
            : undefined
        );
      });
    });
  }

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
  });

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    disabled={ispending}
                    placeholder="Enter your email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>name</FormLabel>
                <FormControl>
                  <Input
                    disabled={ispending}
                    placeholder="Enter your email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    disabled={ispending}
                    type="password"
                    placeholder="Enter your password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="w-[100%] flex flex-row  items-center justify-around space-x-4">
            <Button
              disabled={ispending}
              type="button"
              onClick={() => {
                signIn("github", {
                  callbackUrl: DEFAULT_REDIRECT,
                });
              }}
              className="bg-white text-black hover:bg-gray-100 w-[45%]"
            >
              <img src="/github.svg" alt="sda" />
            </Button>
            <Button
              disabled={ispending}
              type="button"
              onClick={() => {
                signIn("google", {
                  callbackUrl: DEFAULT_REDIRECT,
                });
              }}
              className="bg-white text-black hover:bg-gray-100 w-[45%]"
            >
              <img className=" w-[29px]" src="/goggle.svg" alt="" />
            </Button>
          </div>
          <FormSuccess message={success} />
          <FormError message={error} />
          <Button disabled={ispending} className="w-[100%]" type="submit">
            Submit
          </Button>
        </form>
      </Form>
      <Button
        onClick={() => {
          router.push("/auth/signin");
        }}
        className=" bg-transparen w-full  border-none shadow-none text-black hover:bg-white opacity-100"
      >
        Already have an account? Sign in{" "}
      </Button>
    </>
  );
}
