import { transactionRepository2 } from '../repository'
import { TransactionDto } from '../dtos/transaction.dto'


export interface ITransactionService {
    
    createTransactionService(transactionDto :TransactionDto)
}

export class TransactionService implements ITransactionService{

    async createTransactionService(transactionDto: TransactionDto): Promise<any>{
        return await transactionRepository2.createTransactionRepo(transactionDto)
    }
}