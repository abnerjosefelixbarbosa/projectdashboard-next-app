"use client"

import Responsible from "@/types/Responsible";
import { PropsWithChildren, createContext, useContext, useState } from "react";

type ContextProps = {
  responsible: Responsible | null;
  setResponsible(responsible: Responsible | null): void;
};

const ResponsibleContext = createContext<ContextProps | null>(null);

export default function useMain() {
  const context = useContext(ResponsibleContext);

  if (!context) {
    throw new Error("Please use ResponsibleContext in parent component");
  }

  return context;
}

export function MainProvider({ children }: PropsWithChildren) {
  const [responsible, setResponsible] = useState<Responsible | null>(null);

  return (
    <ResponsibleContext.Provider value={{ responsible, setResponsible }}>
      {children}
    </ResponsibleContext.Provider>
  );
}
