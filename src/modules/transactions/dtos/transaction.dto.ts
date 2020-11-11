export interface TransactionDto{

    accountNumber: String,

    valorTransaction: Number,

    fechaTransaccion: Date,

    accountNumberDestino: String,

    accountNumberEntrada: String,

    transactionType: {
        code: String,
        description: String
    },
    
    description: String

}