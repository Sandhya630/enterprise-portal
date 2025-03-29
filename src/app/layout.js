import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "./components/footer";
import HomePage from "./components/homePage";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <Header />
        <HomePage />
        <Footer />

        {/* <main className="p-6">{children}</main> */}
      </body>
    </html>
  );
}
