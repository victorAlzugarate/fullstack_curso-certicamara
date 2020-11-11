import { BaseController } from '../../../core'
import { TransactionDto } from '../dtos/transaction.dto';

import {ITransactionService, TransactionService } from '../services/transaction.service' 

export class CreateTransactionController extends BaseController{

    constructor (private readonly transactionService: ITransactionService){
        super()
    }

    async executeImpl(): Promise<any> {
        try {          
            const dto : TransactionDto = this.req.body as TransactionDto
            console.info(dto);
            const result = await this.transactionService.createTransactionService(dto) as any;      
            if(result.isLeft()){
                const error = result.value
                switch(error.constructor){
                    
                    default:
                        return this.badRequest("No viene nada")                        
                }
                
            } else {
                return this.ok(result.value.getValue())
            }                         
        } catch(error){
            return this.fail(error)
        }
    }
}