import Titel from "../titel/Titel";
import Image from "next/image";
import book from "@/app/assest/svg/book.svg"
import booksvg1 from "@/app/assest/svg/booksvg1.svg"
import booksvg2 from "@/app/assest/svg/booksvg2.svg"
import booksvg3 from "@/app/assest/svg/booksvg3.svg"

export default function Book(){
    return (
        <>
        <div className="flex justify-between items-center w-full mb-[150px]"> 

            <div className="flex-1/2">
               <p className="text-[18px] font-semibold text-[#5E6282] tracking-[1px] mb-2">
               Easy and Fast
               </p>
               <Titel titel="Book your next trip 
                in 3 easy steps"
                wth={470} />

                <div className="flex justify-start items-center gap-[20px] mt-[20px]">

                    <Image
                    src={booksvg1}
                    alt="svg" />

                    <div>
                        <p className="text-[16px] font-extrabold text-[#5E6282]">
                        Choose Destination
                       </p>
                       <p className="text-[16px] text-[#5E6282] tracking-[0.5px] mb-2 max-w-[327px]">Lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit. Urna, tortor tempus. </p>
                    </div>


                </div>
                <div className="flex justify-start items-center gap-[20px] mt-[20px]">

                    <Image
                    src={booksvg2}
                    alt="svg" />

                    <div>
                        <p className="text-[16px] font-extrabold text-[#5E6282]">
                        Make Payment
                       </p>
                       <p className="text-[16px] text-[#5E6282] tracking-[0.5px] mb-2 max-w-[327px]">Lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit. Urna, tortor tempus. </p>
                    </div>


                </div>
                <div className="flex justify-start items-center gap-[20px] mt-[20px]">

                    <Image
                    src={booksvg3}
                    alt="svg" />

                    <div>
                        <p className="text-[16px] font-extrabold text-[#5E6282]">
                        Reach Airport on Selected Date
                       </p>
                       <p className="text-[16px] text-[#5E6282] tracking-[0.5px] mb-2 max-w-[327px]">Lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit. Urna, tortor tempus. </p>
                    </div>


                </div>

            </div>

            <div className="flex flex-1/2 justify-center items-center">

             <Image
             src={book}
             alt="book" />

            </div>

        </div>
        </>
    )
}