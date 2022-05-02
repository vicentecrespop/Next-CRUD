export default class Cliente {
    #nome: string
    #idade: number
    #email: string
    #id: string

    constructor(nome: string, idade: number, email: string, id: string = null) {
        this.#nome = nome
        this.#idade = idade
        this.#email = email
        this.#id = id
    }

    static vazio() {
        return new Cliente('', 0, '')
    }

    get id() {
        return this.#id
    }

    get nome() {
        return this.#nome
    }

    get idade() {
        return this.#idade
    }

    get email() {
        return this.#email
    }
}