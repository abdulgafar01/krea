"use client";
import Header from "@/components/Header";
import Carousel from "@/components/Carousel";
import Tools from "@/components/Tools";
import Footer from "@/components/Footer";
import { BookCopy, CreditCard } from "lucide-react";


export default function HomePage() {


  return (
    <main className="min-h-screen w-full bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-100">
      {/* Top Navigation */}
      {/* <Header/> */}
     <Header/>


      <div>
        <Carousel/>
      </div>

      {/* Tools Section */}
      <div>
        <Tools/>
      </div>


      <footer className="px-6 py-6 flex  justify-between items-center border-t text-sm text-gray-500">
        <div className="dark:text-white">Krea AI</div>
        <div className="flex gap-4 mt-2 md:mt-0">
          <button  className="p-0 h-auto flex items-center gap-1 bg-gray-200 dark:text-gray-800 py-1 px-4 rounded-full">
            <BookCopy className="h-5 w-5"/>
            <span>
            Legal
            </span>
            </button>
          <button  className="p-0 h-auto flex items-center gap-1 bg-gray-200 dark:text-gray-800 py-1 px-4 rounded-full">
            <CreditCard className="h-5 w-5"/>
            <span>
            Pricing
            </span>
            </button>
        </div>
      </footer>
      <Footer/>

      {/* Footer */}
    </main>
  );
}
