import { TransactionService } from '../services/transaction.service'
import {CreateTransactionController} from './create.transaction.controller'

const transactionService = new TransactionService()

const  createTransactionController = new CreateTransactionController(transactionService)

export {
    createTransactionController,
}
