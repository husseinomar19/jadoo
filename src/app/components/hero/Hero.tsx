import hero from "@/app/assest/image/hero.png";
import Image from "next/image";
import Link from "next/link";
import titelSvg from "@/app/assest/svg/Decore (1).svg"
import { IoPlayCircle } from "react-icons/io5";
export default function Hero()
{

    return(
        <>
        <div className="flex flex-col justify-between items-center w-full z-10 md:flex-row mt-[20px]"> 


        <div className="flex-1/2 relative">
        <Image
        className="absolute -z-50 top-[101px] right-[-62px]"
        src={titelSvg}
        alt="svg" />

           <p className="text-[20px] font-bold text-[#DF6951] uppercase">Best Destinations around the world</p>

           <h2 id="hero-titel" className="text-[82px] font-bold  leading-[1.1] text-[#181E4B]">Travel, enjoy and live a new and full life</h2>

           <p className="text-[14px] text-[#5E6282] tracking-[0.5px] mt-2 font-medium max-w-[390px]">Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</p>

           <div className="flex justify-between items-center w-fit gap-[30px] mt-[25px]">
              
              <Link
              style={{ boxShadow: "0px 20px 35px 0px rgba(241, 165, 1, 0.50)" }}
              className="bg-[#F1A501] rounded-[10px] px-[20px] py-[10px] text-white font-medium"
              href={"/"}>
                Find out more
              </Link>

             <div className="flex justify-center items-center gap-1.5">
             
             <IoPlayCircle color="#DF6951" size={52} />
            <p className="text-[#686D77] font-medium text-[17px]">Play Demo</p>
             </div>

           </div>

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