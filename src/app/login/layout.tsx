import { PropsWithChildren } from "react";
import "./globals.css";

export default function RootLayout({ children }: PropsWithChildren) {
    return (
      <html lang="en">
        <body className="body">{children}</body>
      </html>
    );
}