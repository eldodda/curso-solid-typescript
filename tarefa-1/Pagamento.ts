import CalculaSalario from "./CalculaSalario";
import Colaborador from "./Colaborador";

export default class Pagamento {
		constructor(private servicoCalculoSalario: CalculaSalario) {}

	    pagar(colaborador: Colaborador) {
        const salarioColaborador = this.servicoCalculoSalario.calcular(colaborador.cargo);
        colaborador.saldo = salarioColaborador;
    }
}