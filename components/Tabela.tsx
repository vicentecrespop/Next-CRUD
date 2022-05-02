import Cliente from "../core/Cliente"
import { IconeEdicao, IconeLixo } from "./Icones"

interface TabelaProps {
    clientes: Cliente[]
    clienteSelecionado?: (cliente: Cliente) => void
    clienteExcluido?: (cliente: Cliente) => void
}

export default function Tabela(props: TabelaProps) {

    const exibirAcoes = props.clienteExcluido || props.clienteSelecionado

    function renderizarCabecalho() {
        return (
            <tr className="flex justify-start">
                <th className="text-left p-4 w-1/5">Código</th>
                <th className="text-left p-4 w-1/5">Nome</th>
                <th className="text-left p-4 w-1/5">Idade</th>
                <th className="text-left p-4 w-1/5">E-mail</th>
                {exibirAcoes ? <th className="p-4">Ações</th> : false}
            </tr>
        )
    }

    function renderizarDados() {
        return props.clientes?.map((cliente, i) => {
            return (
                <tr key={cliente.id}
                    className={`${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'} 
                        flex justify-start`}>
                    <td className="text-left p-4 w-1/5 overflow-x-auto">{cliente.id}</td>
                    <td className="text-left p-4 w-1/5 overflow-x-auto">{cliente.nome}</td>
                    <td className="text-left p-4 w-1/5 overflow-x-auto">{cliente.idade}</td>
                    <td className="text-left p-4 w-1/5 overflow-x-auto">{cliente.email}</td>
                    {console.log(cliente)}
                    {exibirAcoes ? renderizarAções(cliente) : false}
                </tr>
            )
        })
    }

    function renderizarAções(cliente: Cliente) {
        return (
            <td className="flex justify-center">
                {props.clienteSelecionado ? (
                    <button onClick={() => props.clienteSelecionado?.(cliente)} className={`
                        flex justify-center items-center p-2 m-1
                        text-green-600 rounded-full hover:bg-purple-50
                        `}>
                        {IconeEdicao}
                    </button>
                ) : false}
                {props.clienteExcluido ? (
                    <button onClick={() => props.clienteExcluido?.(cliente)} className={`
                        flex justify-center items-center p-2 m-1
                        text-red-600 rounded-full hover:bg-purple-50
                        `}>
                        {IconeLixo}
                    </button>
                ) : false}
            </td>
        )
    }

    return (
        <table className="flex flex-col rounded-xl overflow-hidden">
            <thead className={`
            text-gray-100
                bg-gradient-to-r from-gray-500 to-gray-800`}>
                {renderizarCabecalho()}
            </thead>
            <tbody>
                {renderizarDados()}
            </tbody>
        </table>
    )
}