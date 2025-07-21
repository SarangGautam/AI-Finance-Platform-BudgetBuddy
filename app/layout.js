import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/header";
import { Toaster } from "sonner"
import Footer from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  // variable: "--font-inter",
});

export const metadata = {
  title: "BudgetBuddy",
  description: "One stop Finance Platform",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>


    <html lang="en">
      <body className={`${inter.className}`}>
        {/* header */}

        <Header />
        <main className="min-h-screen">{children}</main>
        <Toaster richColors/>
        {/* footer */}
        <Footer/>
        {/* <footer className="bg-blue-50 py-12">
          <div className="container mx-auto text-center px-4 text-gray-600">
            <p>Made with ❤️ by Team</p>
          </div>
        </footer> */}
      </body>
    </html>
     </ClerkProvider>
  );
}
