import * as mongoose from 'mongoose'

import validator from 'validator'
import { ClienteDto } from '../../../modules/clients/dtos/client.dto'

import { documentType, phoneType, addressType, productType } from '../customTypes'

const clientSchema = new mongoose.Schema({
    urlPicture: {
        type: String        
    },
    name: {
        type: String,
        required: [true, 'Nombre requerido'],
    },
    sureName: {
        type: String,
        required: [true, 'Apellido requerido'],
    },
    identification: documentType,
    phones: [phoneType],
    email: {
        type: String,
        required: [true, 'Correo requerido'],
        unique: true,
        validate: {
            validator: function(value){
                return validator.isEmail(value)
            },
            message: props => 'Email invalido'
        }
    },
    products: [productType],
    address: addressType,
    user: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User', required: false
    }
}, { versionKey: false, collection: 'client' })

clientSchema.methods.createClient = async function(raw: any): Promise<any> {
    const client = new Client(raw)
    await client.save()
    return client._id
}

clientSchema.methods.updateClient = async function( idCliente:String, usercreado:  mongoose.Schema.Types.ObjectId, ref: 'User' ): Promise<any> {
    console.info(idCliente)
    var query = { '_id': idCliente }
    const cliente = await Client.findOne(query) 
      
    cliente?.set('user', usercreado)   
    cliente?.save()
    return cliente?._id
}

const Client = mongoose.model('Client', clientSchema)
export { Client }