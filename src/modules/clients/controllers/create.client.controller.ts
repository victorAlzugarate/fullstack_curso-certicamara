import { BaseController } from '../../../core'
import { ClienteDto } from '../dtos/client.dto';

import {IClientService,ClientService} from "../services/client.service"

export class CreateClientController extends BaseController{
    constructor(private readonly clientService: IClientService){
        super()
    }

    async executeImpl(): Promise<any> {
        try {          
            const dto : ClienteDto = this.req.body as ClienteDto
            console.info(dto);
            const result = await this.clientService.createClient(dto) as any;      
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