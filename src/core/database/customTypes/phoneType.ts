import * as mongoose from 'mongoose' 

import { phoneTypes } from '../../enums'

const phoneType = new mongoose.Schema({
    number: {type: String},
    type: {
        type: String,
        enum: {
            values: Object.values(phoneTypes),
            name: 'PhoneType',
            message: 'Tipo teléfono no permitido'
        }
    }
},{ _id: false})

Object.assign(phoneType.statics, { phoneTypes });


export { phoneType }