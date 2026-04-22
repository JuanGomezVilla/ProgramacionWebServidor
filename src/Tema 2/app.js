//IMPORTACIÓN DE MÓDULOS
const chalk = require("chalk");
const GestorEventos = require("./gestorEventos");



//Utilizar el gestor de eventos
let gestor = new GestorEventos();



/**
 * Método para procesar un pedido
 * @returns {Promise} Devuelve el resultado de la promesa (resolve/reject)
 */
function procesarPedido(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //Probabilidad de éxito del 50%
            if(Math.random() > 0.5) resolve();
            else reject();
        }, 2000); //Espera 2 segundos (2000 milisegundos)
    });
}



//EVENTOS

//Evento para generar un nuevo pedido
gestor.on("nuevoPedido", pedido => {
    console.log(chalk.blue(`📝 Procesando pedido (${pedido})`));
    gestor.emit("procesarPago", pedido);
});

//Evento para procesar el pago
gestor.on("procesarPago", async pedido => {
    //Espera a procesar el pedido y si es correcto, emite el evento de confirmación
    try {
        console.log(chalk.yellow(`💳 Procesando pago (${pedido})`));
        await procesarPedido();
        gestor.emit("confirmarPedido", pedido);

    } catch(error){
        //En caso de error
        console.log(chalk.red(`❌ Error al procesar la transacción...`));
    }
});

//Evento para notificar al usuario de que el pedido se ha confirmado
gestor.on("confirmarPedido", pedido => {
    console.log(chalk.green(`✅ Pago confirmado (${pedido})`))
});



//INICIO DEL PROGRAMA
gestor.emit("nuevoPedido", "Hamburguesa Doble");