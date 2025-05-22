import Titel from "../titel/Titel";
import Image from "next/image";
import top from "@/app/assest/image/top.jpg";
import top1 from "@/app/assest/image/top1.jpg";
import top3 from "@/app/assest/image/top3.jpg";
import { TiLocationArrow } from "react-icons/ti";
import line from "@/app/assest/svg/line.svg";
export default function TopDes() {
  return (
    <>
      <div className=" flex flex-col justify-center items-center w-full mt-[150px] mb-[70px] relative px-[75px]">
        <Image
          className="absolute right-[10px] bottom-[119px]"
          src={line}
          alt="line"
        />

        <div className="flex justify-center items-center flex-col">
          <p className="text-[18px] font-semibold text-[#5E6282] tracking-[1px]">
            Top Selling
          </p>
          <Titel titel="Top Destinations" />
        </div>

        <div className="flex flex-wrap justify-between items-center w-full relative mt-[60px]">
          <div className="w-[300px] h-[457px] rounded-[24px] overflow-hidden flex justify-start items-center flex-col shadow-[0_12px_30px_rgba(0,0,0,0.08)]">
            <Image className="w-[300px] h-[343px]" src={top} alt="img" />

            <div className="px-[15px] py-[20px] w-full">
              <div className=" flex justify-between items-center w-full">
                <p className="text-[18px] font-medium text-[#5E6282]">
                  Roma, Italty
                </p>
                <p className="text-[18px] font-medium text-[#5E6282]">$5,42K</p>
              </div>
              <div className="flex justify-start items-center mt-3">
                <TiLocationArrow color="black" size={24} />
                <p className="text-[16px] font-medium text-[#5E6282]">
                  10 Days Trip
                </p>
              </div>
            </div>
          </div>

          <div className="w-[300px] h-[457px] rounded-[24px] overflow-hidden flex justify-start items-center flex-col shadow-[0_12px_30px_rgba(0,0,0,0.08)]">
            <Image
              className="w-[300px] h-[343px] object-cover"
              src={top1}
              alt="img"
            />

            <div className="px-[15px] py-[20px] w-full">
              <div className=" flex justify-between items-center w-full">
                <p className="text-[18px] font-medium text-[#5E6282]">
                  London, UK
                  
                </p>
                <p className="text-[18px] font-medium text-[#5E6282]">$4,2K</p>
              </div>
              <div className="flex justify-start items-center mt-3">
                <TiLocationArrow color="black" size={24} />
                <p className="text-[16px] font-medium text-[#5E6282]">
                  12 Days Trip
                </p>
              </div>
            </div>
          </div>

          <div className="w-[300px] h-[457px] rounded-[24px] overflow-hidden flex justify-start items-center flex-col shadow-[0_12px_30px_rgba(0,0,0,0.08)]">
            <Image
              className="w-[300px] h-[343px] object-cover"
              src={top3}
              alt="img"
            />

            <div className="px-[15px] py-[20px] w-full">
              <div className=" flex justify-between items-center w-full">
                <p className="text-[18px] font-medium text-[#5E6282]">
                  Full Europe
                </p>
                <p className="text-[18px] font-medium text-[#5E6282]">$15K</p>
              </div>
              <div className="flex justify-start items-center mt-3">
                <TiLocationArrow color="black" size={24} />
                <p className="text-[16px] font-medium text-[#5E6282]">
                  28 Days Trip
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
