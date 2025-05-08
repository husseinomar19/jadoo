import volkhov from "../../../app/layout";
import hero from "@/app/assest/image/hero.png";
import Image from "next/image";
export default function Hero()
{

    return(
        <>
        <div className="flex justify-between items-center w-full z-10"> 


        <div className="flex-1/2">

           <p className="text-[20px] font-bold text-[#DF6951] uppercase">Best Destinations around the world</p>

           <h2 className="text-[82px] text-bold font-[var(--font-volkhov)]">Travel, enjoy and live a new and full life</h2>

        </div>

        <div className="flex-1/2">

        <Image
        src={hero}
        alt="gril"/>

        </div>

        </div>

        </>
    )
}