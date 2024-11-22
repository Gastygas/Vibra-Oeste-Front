"use client"
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header.tsx/Header";
import Section1 from "@/components/Section-1/Section-1";
import Section2 from "@/components/Section-2/Section-2";

export default function Home() {
  return (
    <div>
      <Header/>
      <Section1/>
      <Section2/>
      <Footer/>
    </div>
  );
}
