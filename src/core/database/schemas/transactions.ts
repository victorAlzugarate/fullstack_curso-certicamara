import * as mongoose from 'mongoose'

import validator from 'validator'
import {transactionType} from '../customTypes/transaccion.type'

const transaccionSchema = new mongoose.Schema({

    accountNumber:{
        type: String    
    },
    valorTransaction: {
        type : Number,
        required : [true, 'Valor Transaccion es requerido'],  

    },
    fechaTransaccion:{
        type: Date,
        default: Date.now(),
        
    },
    accountNumberDestino: {
        type : String
    },
    accountNumberEntrada:{
        type : String 
    },
    transactionType: transactionType,
    description :{
        type: String
    }
    
})

transaccionSchema.methods.createTransa = async function(raw: any): Promise<any> {
    const transaction = new Transaction(raw)
    await transaction.save()
    return transaction._id
}

const Transaction = mongoose.model('Transaction', transaccionSchema)
export {Transaction}