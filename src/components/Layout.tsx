import Titulo from "./Titulo"

interface LayoutProps{
    titulo: string
    children: any
    className?: string
}

export default function Layout(props: LayoutProps) {
    return (
        <div className={`
        flex flex-col w-2/3
        bg-white text-[#596066] rounded-md
        shadow-[15px_19px_42px_rgba(0,0,0,0.1)]
        ${props.className}`}>
            <Titulo>{props.titulo}</Titulo>
            <div className="p-6 overflow-y-auto">
                {props.children}
            </div>
        </div>
    )
}