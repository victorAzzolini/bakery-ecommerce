import Image from "next/image";
import { Open_Sans } from "next/font/google";
import Hero from "@/components/hero/Hero";

const openSans = Open_Sans({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Hero />
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24 `}
      >
      </main>
    </>
  );
}
