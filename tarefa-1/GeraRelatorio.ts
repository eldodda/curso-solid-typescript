import CalculaSalario from "./CalculaSalario";
import Colaborador from "./Colaborador";

export default class GeraRelatorio {
	constructor(private _colaboradores: Colaborador[], private calcularSalario: CalculaSalario) {}
	    gerarJSON() {

        let relatorio = this._colaboradores.map((colaborador) => {
            return ({
                nome: colaborador.nome,
                cargo: colaborador.cargo,
                salario: this.calcularSalario.calcular(colaborador.cargo),
            });
        });
        return JSON.stringify(relatorio);
    };
}