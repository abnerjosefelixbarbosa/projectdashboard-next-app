import { PropsWithChildren } from "react";

export default function Card({ children }: PropsWithChildren) {
  return (
    <section className="card">
      <div className="card-container">
        {children}
      </div>
    </section>
  );
}
