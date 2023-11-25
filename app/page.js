import Image from "next/image";
import "./page.css";
import Announcement from "@/components/Announcement/Announcement";
import Navbar from "@/components/Navbar/Navbar";
import Banner from "@/components/Banner/Banner";
import Slideshow from "@/components/Slideshow/Slideshow";

export default function Home() {
  return (
    <main className="app-container font">
      <Announcement />
      <Navbar />
      <Banner />
      <Slideshow />
    </main>
  );
}
