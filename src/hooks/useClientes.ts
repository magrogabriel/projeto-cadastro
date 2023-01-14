/* eslint-disable */
import { useState, useEffect } from "react"
import Cliente from "../core/Cliente"
import ColecaoCliente from "../backend/db/ColecaoCliente"
import ClienteRepositorio from "../core/ClienteRepositorio"
import useTabelaOuForm from './useTabelaOuForm'

export default function useClientes() {
    const repo: ClienteRepositorio = new ColecaoCliente()

    const {tabelaVisivel, exibirTabela, exibirFormulario } = useTabelaOuForm()

    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
    const [clientes, setClientes] = useState<Cliente[]>([])

    useEffect(() => {
        repo.obterTodos().then(clientes => {
            setClientes(clientes)
            exibirTabela()
            console.log('obteve todos')
    })
}, [])

    function obterTodos() {
        repo.obterTodos().then(clientes => {
            setClientes(clientes)
            exibirTabela()
            console.log('obteve todos')
        })
    }

    function selecionarCliente(cliente: Cliente) {
        setCliente(cliente)
        exibirFormulario()
    }


    async function excluirCliente(cliente: Cliente) {
        await repo.excluir(cliente)
        repo.obterTodos().then(clientes => {
            setClientes(clientes)
            exibirTabela()
            console.log('obteve todos')
    })
}

    async function salvarCliente(cliente: Cliente) {
        await repo.salvar(cliente)
        repo.obterTodos().then(clientes => {
            setClientes(clientes)
            exibirTabela()
            console.log('obteve todos')
    })
}

    function novoCliente() {
        setCliente(Cliente.vazio())
        exibirFormulario()
    }

    return {
        cliente,
        clientes,
        novoCliente,
        salvarCliente,
        excluirCliente,
        selecionarCliente,
        exibirFormulario,
        obterTodos,
        tabelaVisivel,
        exibirTabela,
    }
}