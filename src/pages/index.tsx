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
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          quam placeat repellat vitae eaque odit cumque? Natus facere, dolor,
          repudiandae repellendus harum adipisci sapiente non repellat hic
          tempora saepe recusandae?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta nam
          nulla expedita fugiat tempora praesentium, odit laboriosam possimus
          cum porro mollitia amet sint vitae dolores minima sed delectus quas
          facilis.
        </p>
      </main>
    </>
  );
}
