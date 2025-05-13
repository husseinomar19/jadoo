import Titel from "../titel/Titel";
import Image from "next/image";
import offer1 from "@/app/assest/image/offer1.png"
import offer2 from "@/app/assest/image/offer2.png"
import offer3 from "@/app/assest/image/offer3.png"
import offer4 from "@/app/assest/image/offer4.png"
import svg from "@/app/assest/svg/offer.svg"

export default function Offers(){
    return (
        <>
        <div className=" flex flex-col justify-center items-center w-full mt-[150px] mb-[150px] relative">

            <Image
                className="absolute right-[-100px] top-0"
                src={svg}
                alt="svg"
            />

            <div className="flex justify-center items-center flex-col">

                <p className="text-[18px] uppercase font-semibold text-[#5E6282] tracking-[1px]">CATEGORY</p>
                <Titel
                titel="We Offer Best Services" 
                />

            </div>


            <div className="flex justify-between items-center w-full mt-[110px]">
            

                <div className="flex flex-col justify-center items-center   p-[20px]">

                    <Image
                    width={92}
                    height={78}
                    src={offer1}
                    alt="offer" />

                    <p className="text-[#1E1D4C] font-semibold text-[17px] mt-5">Calculated Weather </p>
                    <p className="text-[16px] text-center mt-1 text-[#5E6282] leading-1px w-[158px]">Built Wicket longer admire do barton vanity itself do in it.</p>

                </div>


                <div className="flex flex-col justify-center items-center  p-[20px] border border-amber-100 rounded-3xl">

                    <Image
                    className="object-none"
                    width={92}
                    height={78}
                    src={offer2}
                    alt="offer" />

                    <p className="text-[#1E1D4C] font-semibold text-[17px] mt-5">Calculated Weather </p>
                    <p className="text-[16px] text-center mt-1 text-[#5E6282] leading-1px  w-[158px]">Built Wicket longer admire do barton vanity itself do in it.</p>

                </div>



<div className="flex flex-col justify-center items-center  p-[20px]">

                    <Image
                    className="h-[87px] object-cover"
                    width={92}
                    src={offer3}
                    alt="offer" />

                    <p className="text-[#1E1D4C] font-semibold text-[17px] mt-5">Calculated Weather </p>
                    <p className="text-[16px] text-center mt-1 text-[#5E6282] leading-1px  w-[158px]">Built Wicket longer admire do barton vanity itself do in it.</p>

                </div>


<div className="flex flex-col justify-center items-center  p-[20px]">

                    <Image
                    width={92}
                    height={78}
                    src={offer4}
                    alt="offer" />

                    <p className="text-[#1E1D4C] font-semibold text-[17px] mt-5">Calculated Weather </p>
                    <p className="text-[16px] text-center mt-1 text-[#5E6282] leading-1px w-[158px]">Built Wicket longer admire do barton vanity itself do in it.</p>

                </div>


            </div>

        </div>

        </>
    )
}