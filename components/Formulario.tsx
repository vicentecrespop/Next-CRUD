import { useState } from "react";
import Cliente from "../core/Cliente";
import Botao from "./Botao";
import Entrada from "./Entrada";

interface FormularioProps {
    cliente: Cliente
    clienteMudou?: (cliente: Cliente) => void
    cancelado?: () => void
}

export default function Formulario(props: FormularioProps) {
    const id = props.cliente?.id
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0)
    const [email, setEmail] = useState(props.cliente?.email ?? '')

    return (
        <div>
            {id ? (
                <Entrada className="mb-4" somenteLeitura texto="Código" valor={id} />
            ) : false}
            <Entrada className="mb-4" texto="Nome" valor={nome} valorMudou={setNome}></Entrada>
            <Entrada className="mb-4" texto="Idade" tipo="number" valor={idade} valorMudou={setIdade}></Entrada>
            <Entrada texto="E-mail" valor={email} valorMudou={setEmail}></Entrada>
            <div className="flex justify-end mt-7">
                <Botao cor="blue" className="mr-2"
                    onClick={() => props.clienteMudou?.(new Cliente(nome, +idade, email, id))}>
                    {id ? 'Alterar' : 'Salvar'}
                </Botao>
                <Botao onClick={props.cancelado}>
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}