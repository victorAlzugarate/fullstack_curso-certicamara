import { BaseController } from '../../../core'
import { IClientService } from '../services/client.service'

import fs from 'fs'

export class LoadPictureClientController extends BaseController {
    
    constructor(private readonly clientService: IClientService){
        super()
    }

    async executeImpl(): Promise<any> {
        try {          
            const file = fs.createReadStream(this.req.file.path)
            const id = this.req.params.id
            const url = await this.clientService.uploadPictureClient(file, id, this.req.file.originalname) as any
            fs.unlinkSync(this.req.file.path)
            return this.ok(url)
        } catch(error){
            return this.fail(error)
        }
    }    
}