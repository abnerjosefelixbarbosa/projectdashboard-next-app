"use client"

import "./style.css";
import "../app/login/style.css"
import "../app/create-account/style.css"
import { PropsWithChildren } from "react";
import { ProjectProvider } from "@/contexts/useProject";
import { ResponsibleProvider } from "@/contexts/useResponsible";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html>
      <body>
        <ResponsibleProvider>
        <ProjectProvider>
          {children}
        </ProjectProvider>
        </ResponsibleProvider>
      </body>
    </html>
  );
}
