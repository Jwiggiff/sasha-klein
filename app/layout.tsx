import Contact from "@/components/Contact";
import "./globals.scss";

export const metadata = {
  title: "Sasha Klein",
  description: "Beep Boop Bop",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/vex6nfl.css" />
      </head>
      <body>
        <Contact />
        {children}
      </body>
    </html>
  );
}
