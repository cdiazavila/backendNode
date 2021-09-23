const express = require('express');
const router = express.Router();
const pacienteController = require('../controllers/pacienteController');

module.exports = function() {

    // Agrega nuevos pacientes via POST
    router.post('/pacientes', 
        pacienteController.nuevoCliente
    )
    
    // consultar los datos de la mongoBD

    router.get('/pacientes',
    pacienteController.odtenerPaccientes
    )

      // Obtiene un paciente en especifico (ID)
      router.get('/pacientes/:id',
      pacienteController.obtenerPaciente
  )
   
    // Actualizar un registro con un ID especifico
    router.put('/pacientes/:id',
        pacienteController.actualizarPaciente
    );

     // Elimina un paciente por su ID
     router.delete('/pacientes/:id',
     pacienteController.eliminarPaciente
 );

    return router;
}