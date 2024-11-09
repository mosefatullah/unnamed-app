import "./globals.css";
import type { AppProps } from "next/app";

import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function App({ Component, pageProps }: AppProps) {
 return (
  <>
   <SidebarProvider>
    <Sidebar />
    <SidebarInset>
     <Navbar />
     <Component {...pageProps} />
    </SidebarInset>
   </SidebarProvider>
  </>
 );
}
