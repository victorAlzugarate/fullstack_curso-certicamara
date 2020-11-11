import {transactionRepository} from './transaction.repository'
import { models } from '../../../core'

const transactionRepository2 = new transactionRepository(models)

export {
    transactionRepository2,
}