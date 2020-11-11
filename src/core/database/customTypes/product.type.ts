import * as mongoose from 'mongoose'

const productType = new mongoose.Schema({
    accountNumber: {type: String},
    isActive: {
        type: Boolean,
        default: true,
    },
    available: {
        type: Number,
        default: 50000
    },
    accountMinimumInflow: {
        type: Number,
        default: 0
    },
    creationDate: {
        type: Date,
        default: Date.now()
    }
})



export { productType }