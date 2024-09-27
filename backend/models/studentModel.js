import { Schema, model } from "mongoose"

const studentSchema = new Schema({
    name: {type: String, required: true},
    apepat: {type: String, required: true}
},{ collection: 'students' })

export const Student = new model('Tabla de registro de alumnos',studentSchema)