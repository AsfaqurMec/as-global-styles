import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./Components/Footer.jsx";
import Navbar from "./Components/Navbar.jsx";
import { UserProvider, useUser} from "../../context/UserContext";
import AuthProvider from "../../services/AuthProvider";
// import LowerNav from "@/Components/LowerNav";
import { Toaster } from "react-hot-toast";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "AS Global Styles",
  description: "A website for all kind of garments services.",
  icons: {
    icon: "/favicon.ico", // Add the path to your favicon file
  },
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en" data-theme="light">
    {/* Wrap the entire app with AuthProvider and UserProvider */}
    <AuthProvider>
      <UserProvider>

        <body className="antialiased">
          <Navbar />
          {children}
          <Toaster></Toaster>
            
          <div className="">
          
          </div>
          {/* <LowerNav></LowerNav> */}
          <Footer />
          
          
          
        </body>
        
      </UserProvider>
    </AuthProvider>
  </html>
  
  );
}