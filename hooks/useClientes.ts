import ColecaoCliente from "../backend/db/ColecaoCliente"
import Cliente from "../core/Cliente"
import ClienteRepositorio from "../core/ClienteRepositorio"
import { useState, useEffect } from "react"
import useTabelaOuForm from "./useTabelaOuForm"

export default function useClientes() {
    const repo: ClienteRepositorio = new ColecaoCliente()

    const {
        tabelaVisivel,
        formularioVisivel,
        exibirFormulario,
        exibirTabela,
    } = useTabelaOuForm()

    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
    const [clientes, setClientes] = useState<Cliente[]>([])

    useEffect(obterTodos, [])

    function obterTodos() {
        repo.obterTodos().then(clientes => {
        setClientes(clientes)
        exibirTabela()
    })
    }

    function selecionarCliente(cliente: Cliente) {
        setCliente(cliente)
        exibirFormulario()
    }

    async function excluirCliente(cliente: Cliente) {
        await repo.excluir(cliente)
        obterTodos()
    }

    async function salvarCliente(cliente: Cliente) {
        console.log(cliente)
        await repo.salvar(cliente)
        obterTodos()
    }

    function novoCliente(cliente: Cliente) {
        setCliente(Cliente.vazio())
        exibirFormulario()
    }

    return {
        tabelaVisivel,
        exibirTabela,
        cliente,
        clientes,
        novoCliente,
        salvarCliente,
        excluirCliente, 
        selecionarCliente,
        obterTodos
    }

}