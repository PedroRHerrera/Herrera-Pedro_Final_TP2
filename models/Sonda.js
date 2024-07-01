class Sonda {
    sondas=[];

    agregar = async (sonda) => {
        this.sondas.push(sonda);
        return sonda;
    };
    
    obtenerTodas = async() => {
        return this.sondas;
    };

    obtenerPorId = async (id) => {
        const sonda = this.sondas.filter(s => s.id === id);
        return sonda;
    }

    obtenerEstadisticas = async () => {
        const estadisticas = {
            cantidadTotalMuestras: this.sondas.length,
            temperaturaSondas: {}
        };

        for (let i = 1; i <= 5; i++) {
            estadisticas.temperaturaSondas[i] = {
                cantidad: 0,
                promedio: 0
            };
        }

        for (let i = 1; i <= 5; i++) {
            const muestras = this.sondas.filter(s => s.id === i);
            if (muestras.length > 0) {
                const sumaTemperaturas = muestras.reduce((acc, muestra) => acc + muestra.temperatura, 0);
                estadisticas.temperaturaSondas[i] = {
                    cantidad: muestras.length, 
                    promedio: sumaTemperaturas / muestras.length
                };
            }
        }

        return estadisticas;
    };
}

export default Sonda;