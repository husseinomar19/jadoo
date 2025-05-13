interface prop {
    titel : string;
    wth? : number;
}
export default function Titel({titel ,wth} : prop){
    return (
        <>
        <h2
        style={{width : `${wth}px`}}
         id="hero-titel" className="text-[50px] font-bold text-[#14183E] leading-[1.1]">{titel}</h2>
        </>
    )
}