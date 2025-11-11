import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Print On Demand - Custom Products Made Easy",
  description: "Create and order custom printed products including t-shirts, mugs, posters, and more. Design your unique products online.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
