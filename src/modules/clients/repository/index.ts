import { ClientRepository } from './client.repository'
import { models } from '../../../core'

const clientRepository = new ClientRepository(models)

export {
    clientRepository
}