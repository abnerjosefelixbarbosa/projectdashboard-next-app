"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  email: z
    .string()
    .email("Email is invalid"),
  password: z
    .string()
    .max(20, "Password must be at max 20 characters"),
});

type FormLogin = z.infer<typeof schema>;

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormLogin>({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    resolver: zodResolver(schema),
  });

  function handLogin(data: FormLogin) {
    if (isValidLoginFrom(data)) {
      console.log(data);
    }
  }

  function isValidLoginFrom(data: FormLogin) {
    if (data.password === "") {
      setError("password", {
        message: "Password is empty"
      });
      return false;
    }
    return true;
  }

  return (
    <>
      <section className="login-container">
        <div className="login-header"></div>
        <div className="login-body">
          <form onSubmit={handleSubmit(handLogin)}>
            <div className="login-form-controller">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" autoComplete="on" { ...register("email") } />
              <span className="alert">{errors.email?.message}</span>
            </div>
            <div className="login-form-controller">
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" autoComplete="on" { ...register("password") } />
              <span className="alert">{errors.password?.message}</span>
            </div>
            <div className="center">
              <button type="submit" className="login-button">
                Login
              </button>
            </div>
            <div>
              <Link href="/create-account" className="create-account-link">
                Não possui conta?
              </Link>
            </div>
          </form>
        </div>
        <div className="login-fooder"></div>
      </section>
    </>
  );
}