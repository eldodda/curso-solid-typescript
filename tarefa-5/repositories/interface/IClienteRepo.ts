import Cliente from "../../entities/Cliente";

interface IClienteRepo {
	adicionaCliente(cliente: Cliente): void;
	listaClientes(): Cliente[];
}

export default IClienteRepo;