import { LoadPictureClientController } from './load.picture.client.controller'
import { DeletePictureClientController } from './delete.picture.client.controller'
import {CreateClientController} from './create.client.controller'
import { ClientService } from '../services/client.service'

const clientService = new ClientService()

const loadPictureClientController = new LoadPictureClientController(clientService)
const deletePictureClientController = new DeletePictureClientController(clientService)
const createClientController = new CreateClientController(clientService)

export {
    loadPictureClientController,
    deletePictureClientController,
    createClientController
}