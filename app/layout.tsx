import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CourseFlow",
  description: "Two-page learning dashboard built from the provided Figma reference.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
