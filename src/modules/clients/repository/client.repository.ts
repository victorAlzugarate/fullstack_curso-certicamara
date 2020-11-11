import { Either, GenericAppError, Result, left, right } from '../../../core'
import {ClienteDto} from "../dtos/client.dto"
import {User} from "../../../core/database/schemas/user"


type Response = Either<
    GenericAppError.UnexpectedError |
    GenericAppError.NotFoundError |
    Result<any>,
    Result<void>>

export interface IClientRepo {
    updateClientPic(id: string, url: string) : Promise<Response>
    create(ClienteDto) : Promise<Response>
}

export class ClientRepository implements IClientRepo {
    
    private models: any

    constructor(models){
        this.models = models
    }

    public async updateClientPic(id: string, url: string): Promise<Response> {
        throw new Error("Method not implemented.");
    }

    public async create(clienteDto : ClienteDto ): Promise <Response>{
        
        const newClient = this.models.Client
        
        try{
            const  clienteId =  await newClient.schema.methods.createClient(clienteDto)
            if(clienteId != null){
                const newUser = User.schema
                const email = clienteDto.email                
                const password = Math.random().toString(36).slice(-8); 
                console.info(password)           
                const user = await newUser.methods.CreateUser2(email,password)
                
                const idFinal =  await newClient.schema.methods.updateClient(clienteId,user)
                
            }
            return  right(Result.ok<any>(clienteId)) as Response
            
        } catch(e){
            console.info(e);
            return  left(new GenericAppError.UnexpectedError(e)) as Response
        }
    }

    
    
}

