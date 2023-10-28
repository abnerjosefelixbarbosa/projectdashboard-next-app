import { PropsWithChildren } from "react";
import "./style.css"

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="pt-br">
      <head>
        <title>Create Account</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  );
}
