import { PropsWithChildren } from "react";
import "./globals.css";

const RootLayout = ({ children }: PropsWithChildren) => {
    return (
      <html lang="en">
        <body className="body">{children}</body>
      </html>
    );
}
  
export default RootLayout;