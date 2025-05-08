import Image from "next/image";
import HeroSvg from "@/app/assest/svg/Decore.svg"
import Hero from "./components/hero/Hero";

export default function Home() {
  return (
    <>
    <div className="relative w-full flex justify-center items-center">
      <Image
      className="absolute top-0 right-0 -z-20"
      height={572}
      width={666}
      src={HeroSvg}
      alt="svg" />
     <div className="w-full max-w-[1171px] px-[30px]">


      {/**Header */}

      {/**Header */}


      {/**hero */}
      <Hero />
      {/**hero */}


      {/**offer */}
      {/**offer */}
      

      {/**Top Destinations */}
      {/**Top Destinations */}


      {/**Book */}
      {/**Book */}


      {/**review */}
      {/**review */}


      {/**logobanier*/}
      {/**logobanier*/}



      {/**subscribe*/}
      {/**subscribe*/}


      {/**Footer*/}
      {/**Footer*/}


      




     </div>
    </div>

    </>
    
  );
}
