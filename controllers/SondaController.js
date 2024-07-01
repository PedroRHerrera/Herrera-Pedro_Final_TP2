import SondaService from "../services/SondaService.js";

class SondaController {
    SondaService = new SondaService();

    agregarSonda = async (req, res) => {
        try {
            const sonda = req.body;
            const data = await this.SondaService.agregarSondaService(sonda);
            res.status(200).send(data);
        } catch (error) {
            res.status(422).send({ errorMsg: error.message });
        }
    };
    
    listarSondas = async (req, res) => {
        try {
            const data = await this.SondaService.listarSondasService();
            res.status(200).send(data);
        } catch (error) {
            res.status(500).send({ errorMsg: 'Error al listar las sondas' })
        }
    };

    listarSondasPorId = async (req, res) => {
        try {
            const { id } = req.params;
            const data = await this.SondaService.listarSondaPorIdService(parseInt(id));
            res.status(200).send(data);
        } catch (error) {
            res.status(404).send({ errorMsg: 'Número de sonda incorrecto' })
        }
    };

    obtenerEstadisticas = async (req, res) => {
        try {
            const data = await this.SondaService.obtenerEstadisticasService();
            res.status(200).send(data);
        } catch (error) {
            res.status(422).send({ errorMsg: 'Error al obtener las estadísticas' });
        }
    };
}

export default SondaController;