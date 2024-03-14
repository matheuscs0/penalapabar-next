
export const Footer = () => {
    return(
        <footer className="w-full flex bg-[#171a1d] mt-10 bottom-0">
            <div className="w-full flex-col justify-around items-center text-white my-5 sm:flex md:flex-row ">
                <div className="flex flex-col justify-center items-center sm:items-start md:items-start">
                    <h1 className="font-bold text-xl">Contato</h1>
                    <div><p className="text-sm">Rua Coriolano, 336 - Vila Romana, São Paulo</p></div>
                    <div><p className="text-sm">+55 11 3862-5815</p></div>
                    <div><p className="text-sm">penalapabar@gmail.com</p></div>
                </div>
                <div className="flex-col items-center justify-center">
                    <h1 className="text-[50px] text-[#ff9600] text-center">Pé na Lapa</h1>
                </div>
                <div className="flex flex-col justify-center  items-center sm:items-start md:items-start">
                    <h1 className="font-bold text-xl">Horários de atendimento</h1>
                    <div><p className="text-sm">Segunda a Sabádo dás 12h - 23h</p></div>
                    <div><p className="text-sm">Domingo e Feriados dás 12h - 18h</p></div>
                   
                </div>
            </div>
        </footer>
    )
}