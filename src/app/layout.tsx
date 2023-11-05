import "./style.css";
import "../app/login/style.css"
import "../app/create-account/style.css"
import { PropsWithChildren } from "react";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
