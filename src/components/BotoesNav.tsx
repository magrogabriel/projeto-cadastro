import Link from "next/link"
import Botao from "./Botao"

interface BotoesNavProps {
    classNameInicio?: string
    classNameSobre?: string
}

export default function BotoesNav(props: BotoesNavProps) {

    return (
        <>
            <ul className="flex justify-center items-center gap-4">
                <li>
                    <button className={`px-4 py-2 font-bold rounded-[10px] shadow-[0px_0px_7px_rgba(0,0,0,0.1)] hover:bg-[#3b82f6] hover:text-white transition duration-150 ease-in-out hover:shadow-[0px_0px_11px_rgba(0,0,0,0.1)] ${props.classNameInicio ? props.classNameInicio : 'bg-[#ffffff]'}`}><Link href="/">Início</Link></button>
                </li>
                <li>
                    <button className={`px-4 py-2 font-bold rounded-[10px] shadow-[0px_0px_7px_rgba(0,0,0,0.1)] hover:bg-[#3b82f6] hover:text-white transition duration-150 ease-in-out hover:shadow-[0px_0px_11px_rgba(0,0,0,0.1) ${props.classNameSobre ? props.classNameSobre : 'bg-[#ffffff]'}`}><Link href="/about">Sobre</Link></button>
                </li>
            </ul>
        </>


    )
} 