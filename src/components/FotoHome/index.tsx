type FotoHomeType = {
    href : string
}

export const FotoHome = ({href}: FotoHomeType) => {
    return(
       <div className="max-w-[520px] h-[490px] flex justify-center items-center p-2 bg-[#ff9600] rounded-md">
            <img src={href} alt="" className="w-full flex h-full object-cover"/>
       </div>
    )
}