import * as mongoose from 'mongoose'

const addressType = new mongoose.Schema({
    city: {type: String},
    state: {type: String},
    street: {type: String}
},{ _id: false })


export { addressType }