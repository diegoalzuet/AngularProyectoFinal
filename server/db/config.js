import mongoose from 'mongoose'

export const connectDB = async() => {
    try {
        await mongoose.connect(process.env.URI);
        console.log("Conectado a la Base de Datos")
    } catch (error) {
        console.log("Error al conectar a la base de datos", error);        
    }
}