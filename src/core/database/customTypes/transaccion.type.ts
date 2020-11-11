import * as mongoose from 'mongoose' 

import { transactionTypes } from '../../enums/transaction.type.enum'

const transactionType = new mongoose.Schema({
    code: {type: String},
    description: {
        type: String,
        enum: {
            values: Object.values(transactionTypes),
            name: 'TransaccionType',
            message: 'Tipo transaccion no permitido'
        }
    }
},{ _id: false}
)
Object.assign(transactionType.statics, { transactionTypes });
export {transactionType}