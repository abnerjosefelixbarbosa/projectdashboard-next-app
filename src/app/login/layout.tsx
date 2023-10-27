import { PropsWithChildren } from "react";
import "./style.css";

export default function RootLayout({ children }: PropsWithChildren) {
    return (
      <html lang="en">
        <body className="body">{children}</body>
      </html>
    );
}