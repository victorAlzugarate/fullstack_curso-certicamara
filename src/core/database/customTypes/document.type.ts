import * as mongoose from 'mongoose'
import { documentTypes } from '../../enums'

const documentType = new mongoose.Schema({
    number: {type: String},
    type: {
        type: String,
        enum: {
            values: Object.values(documentTypes),
            name: 'DocumentType',
            message: 'Valor no permitido'
        }
    }  
},{ _id: false })

Object.assign(documentType.static, { documentTypes })

export { documentType }