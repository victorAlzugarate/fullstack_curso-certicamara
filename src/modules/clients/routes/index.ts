import { Router } from 'express'

import {
    loadPictureClientController,
    deletePictureClientController,
    createClientController
} from '../controllers'

const multer = require('multer')
const upload = multer({ dest: 'src/uploads' })

const clientRouter: Router = Router()

clientRouter.post('/client/pic/:id', upload.single('profile'),
    (req, res) => loadPictureClientController.execute(req, res))

clientRouter.delete('/client/pic',
    (req, res) => deletePictureClientController.execute(req, res))

clientRouter.post('/client/create',
    (req,res) => createClientController.execute(req,res)  )

export { clientRouter }