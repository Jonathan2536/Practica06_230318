import mongoose from 'mongoose';

// Esquema de la sesión
const sessionSchema = new mongoose.Schema({
    sessionId: { type: String, required: true },
    DatosCliente: {
        email: { type: String, required: true },
        nickname: { type: String, required: true }
    },
    lastAccessedAt: { type: Date, required: true },
    clienteIP: { type: String, required: true },
    clienteMac: { type: String, default: 'No se puede obtener por protocolos' }, // Si no se puede obtener la MAC, se coloca un valor predeterminado
    DatosServidor: {
        serverIP: { type: String, required: true },
        serverMac: { type: String, default: 'No se puede obtener por protocolos' } // Si no se puede obtener la MAC, se coloca un valor predeterminado
    },
    status: { 
        type: String, 
        enum: ['activa', 'inactiva', 'destrucción por inactividad', 'finalizada por el usuario'], 
        default: 'activa', 
        required: true 
    }
});

// Crear el modelo basado en el esquema
const Session = mongoose.model('Session', sessionSchema, 'sessions'); // Aquí es donde se especifica la colección 'sessions'

export default Session;