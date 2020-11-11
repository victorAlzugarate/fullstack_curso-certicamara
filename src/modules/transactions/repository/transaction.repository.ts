import { Either, GenericAppError, Result, left, right } from '../../../core'
import {TransactionDto} from '../dtos/transaction.dto'

type Response = Either<
    GenericAppError.UnexpectedError |
    GenericAppError.NotFoundError |
    Result<any>,
    Result<void>>

export interface ITransactionRepo{
    createTransactionRepo(TransactionDto): Promise<Response>
}

export class transactionRepository implements ITransactionRepo{

    private models: any

    constructor(models){
        this.models = models
    }


    public async createTransactionRepo(transactionDto : TransactionDto ): Promise <Response>{

        const newTransaction = this.models.Transaction

        try{
            const  transactionid =  await newTransaction.schema.methods.createTransa(transactionDto)           
            return  right(Result.ok<any>(transactionid)) as Response
            
        } catch(e){
            console.info(e);
            return  left(new GenericAppError.UnexpectedError(e)) as Response
        }
    }

}