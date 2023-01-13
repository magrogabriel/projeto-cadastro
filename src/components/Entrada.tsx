interface EntradaProps {
    tipo?: 'text' | 'number'
    texto: string
    valor: any
    somenteLeitura?: boolean
    className?: string
    valorMudou?: (valor: any) => void
}
export default function Entrada(props: EntradaProps) {
    return (
        <div className={`
        flex flex-col ${props.className}`}>
            <label>
                {props.texto}
            </label>
            <input 
            type={props.tipo ?? 'text'} 
            placeholder={props.placeholderForm} 
            value={props.valor} 
            readOnly={props.somenteLeitura}
            className={`
            border border-gray-300 rounded-lg bg-slate-50 px-4 py-2
            placeholder:italic placeholder:text-slate-400
            focus:outline-none focus:ring focus:border-blue-500 transition duration-150 ease-in-out
            ${props.somenteLeitura ? 'bg-slate-200' : 'focus:bg-white'}
            `}
            onChange={e => props.valorMudou?.(e.target.value) }/>
        </div>
    )
}