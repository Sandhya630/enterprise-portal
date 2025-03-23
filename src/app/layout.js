import "./globals.css";
import Header from "@/app/components/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <Header />
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
