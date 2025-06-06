import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/components/Button/Button";
import Footer from "@/components/Footer/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <head>
          <link rel="icon" type="image/png" href="./favicon.png" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
