import Cliente from "../entities/Cliente";
import IClienteRepo from "../repositories/interface/IClienteRepo";

export default class ClienteController {
    constructor(private repository: IClienteRepo) {
    }

    adicionaCliente(cliente: Cliente): void {
        this.repository.adicionaCliente(cliente);
    }
    listaClientes(): Cliente[] {
        return this.repository.listaClientes();
    }
}