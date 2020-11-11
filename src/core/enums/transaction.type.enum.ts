enum TransactionTypes{
    deposito = 1,
    retiro = 2,
    transferenciaEntrante = 3,
    transferenciaSaliente = 4
}

const transactionTypes = Object.freeze({
    deposito : 'Deposito',
    retiro : 'Retiro',
    transferenciaEntrante : 'Transferencia_Entrante',
    transferenciaSaliente : 'Transferencia_Saliente'
});

export {TransactionTypes,transactionTypes}