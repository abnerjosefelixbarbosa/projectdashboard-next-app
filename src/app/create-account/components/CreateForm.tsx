"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z
    .string()
    .max(100, "Name must be at max 100 characters"),
  email: z.string().email("Email is invalid"),
  password: z
    .string()
    .max(20, "Password must be at max 20 characters"),
  repeat_password: z
    .string()
    .max(20, "Password must be at max 20 characters"),
});

type Form = z.infer<typeof schema>;

export default function CreateAccountForm() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<Form>({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    resolver: zodResolver(schema),
  });

  function handCreate(data: Form) {
    if (isValidFrom(data)) {
      console.log(data);
    }
  }

  function isValidFrom(data: Form) {
    if (data.name === "") {
      setError("name", {
        message: "Name is empty",
      });
      return false;
    }
    if (data.password === "") {
      setError("password", {
        message: "Password is empty",
      });
      return false;
    }
    if (data.repeat_password === "") {
      setError("repeat_password", {
        message: "Repeat Password is empty",
      });
      return false;
    }
    if (data.password !== data.repeat_password) {
      setError("repeat_password", {
        message: "Password is different",
      });
      return false;
    }
    return true;
  }

  return (
    <>
      <section className="create-account-container">
        <div className="create-account-header"></div>
        <div className="create-account-body">
          <form onSubmit={handleSubmit(handCreate)}>
            <div className="create-account-form-controller">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" autoComplete="on" {...register("name")} />
              <span className="alert">{errors.name?.message}</span>
            </div>
            <div className="create-account-form-controller">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" autoComplete="on" {...register("email")} />
              <span className="alert">{errors.email?.message}</span>
            </div>
            <div className="create-account-form-controller">
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" autoComplete="on" {...register("password")} />
              <span className="alert">{errors.password?.message}</span>
            </div>
            <div className="create-account-form-controller">
              <label htmlFor="password">Repeat Password:</label>
              <input
                type="password"
                id="repeat-password"
                autoComplete="on"
                {...register("repeat_password")}
              />
              <span className="alert">{errors.repeat_password?.message}</span>
            </div>
            <div className="center">
              <button className="create-button">Create</button>
            </div>
          </form>
        </div>
        <div className="create-account-fooder"></div>
      </section>
    </>
  );
}
