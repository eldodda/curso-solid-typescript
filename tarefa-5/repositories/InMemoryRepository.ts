import Cliente from "../entities/Cliente";
import IClienteRepo from "./interface/IClienteRepo";

export default class InMemoryRepository implements IClienteRepo{
    private db: Cliente[];

    constructor() {
        this.db = [];
    }

    adicionaCliente(cliente: Cliente) {
        this.db.push(cliente);
    }
    listaClientes() {
        return this.db;
    }
}
