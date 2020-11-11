import { BaseController } from '../../../core'
import { IClientService } from '../services/client.service'
import { DeletePictureClientDto } from '../dtos'

export class DeletePictureClientController extends BaseController {
    
    constructor(private readonly clientService: IClientService){
        super()
    }

    async executeImpl(): Promise<any> {
        try {          
            const dto: DeletePictureClientDto = this.req.body as DeletePictureClientDto
            await this.clientService.deletePictureCliente(dto.id, dto.name)
            return this.ok("Archivo eliminado satisfactoriamente")
        } catch(error){
            return this.fail(error)
        }
    }    
}