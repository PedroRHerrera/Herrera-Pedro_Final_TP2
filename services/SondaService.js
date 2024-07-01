import Sonda from "../models/Sonda.js";

class SondaService{

    sondaModel = new Sonda();

    agregarSondaService = async (sonda) => {
        const { id, temperatura } = sonda;
        if (!Number.isInteger(id) || id < 1 || id > 5) throw new Error('Id de Sonda no válido');
        if (typeof temperatura !== 'number' || temperatura < -20 || temperatura > 100) throw new Error('Temperatura no válida');
        
        const fechaHora = new Date().toISOString();
        const nuevaSonda = { ...sonda, fechaHora};

        return await this.sondaModel.agregar(nuevaSonda);
    };

    listarSondasService = async () => {
        return await this.sondaModel.obtenerTodas();
    };

    listarSondaPorIdService = async (id) => {
        if (!Number.isInteger(id) || id < 1 || id > 5) throw new Error('Número de sonda incorrecto');
        return await this.sondaModel.obtenerPorId(id);
    };

    obtenerEstadisticasService = async () => {
        return await this.sondaModel.obtenerEstadisticas();
    };  
}

export default SondaService;