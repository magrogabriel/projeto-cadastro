import { useState } from "react";
import Botao from "./Botao";
import Entrada from "./Entrada";
import Cliente from "../core/Cliente"

interface FormularioProps {
    cliente: Cliente
    clienteMudou?: (cliente: Cliente) => void
    cancelado?: () => void
    placeholderForm?: string

}
export default function Formulario(props: FormularioProps) {
    const id = props.cliente?.id
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [idade, setIdade] = useState(props.cliente?.idade ?? '')
    return (
        <div>
            {id ? (<Entrada texto="Código" somenteLeitura valor={id} className="mb-4"></Entrada>) : false}
            <Entrada texto="Nome" placeholderForm="Digite seu nome" valor={nome} valorMudou={setNome} className="mb-4"></Entrada>
            <Entrada texto="Idade" placeholderForm="Digite sua idade" tipo="number" valor={idade} valorMudou={setIdade}></Entrada>
            <div className="flex justify-end mt-5">
                <Botao className="mr-2 bg-[#60a5fa] hover:bg-[#3b82f6] hover:shadow-[inset_-2px_-3px_13px_rgba(0,0,0,0.1)] transition duration-150 ease-in-out"
                onClick={() => props.clienteMudou?.(new Cliente(nome, +idade, id))}>
                    {id ? 'Alterar' : 'Salvar'}
                </Botao>
                <Botao className="bg-[#d4d4d8] hover:bg-[#a1a1aa] hover:shadow-[inset_-2px_-3px_13px_rgba(0,0,0,0.1)] transition duration-150 ease-in-out"onClick={props.cancelado}>
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}