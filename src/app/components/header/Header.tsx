import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import Logo from "@/app/assest/svg/Logo.svg"
import Image from "next/image";

export default function Header(){
    return (
        <>
        <header className="w-full flex justify-between items-center mt-[35px]">

            <Link
            className="font-bold text-[25px] text-[#181E4B]"
            href={"/"}>
                <Image
                src={Logo}
                alt="Logo"/>
            </Link>


            <ul className="flex justify-between items-center gap-[50px]">
                <li className="font-medium text-[17px] tracking-[0.4] text-[#212832]">
                    <Link
                    href={"/"}>
                        Desitnations
                    </Link>
                </li>
                <li className="font-medium text-[17px] tracking-[0.4] text-[#212832]">
                    <Link
                    href={"/"}>
                       Hotels
                    </Link>
                </li>
                <li className="font-medium text-[17px] tracking-[0.4] text-[#212832]">
                    <Link
                    href={"/"}>
                        Flights
                    </Link>
                </li>
                <li className="font-medium text-[17px] tracking-[0.4] text-[#212832]">
                    <Link
                    href={"/"}>
                        Bookings
                    </Link>
                </li>
                <li className="font-medium text-[17px] tracking-[0.4] text-[#212832]">
                    <Link
                    href={"/"}>
                       Login
                    </Link>
                </li>
                <li className="font-medium text-[17px] tracking-[0.4] text-[#212832] border border-[#212832] rounded-[5px] px-[14px] py-[3px]">
                    <Link
                    href={"/"}>
                        Sign up
                    </Link>
                </li>
                <li className="font-medium text-[17px] tracking-[0.4] text-[#212832]">
                    <Link
                    className="flex justify-center items-center gap-1"
                    href={"/"}>
                        NL 
                        <IoIosArrowDown color="#212832" size={10}/>
                        
                    </Link>
                </li>
            </ul>

        </header>
        </>
    )
}