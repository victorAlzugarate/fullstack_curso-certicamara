import { Router } from 'express'

import { auth } from '../../../core'

import {
    createTransactionController

} from '../controllers'

const multer = require('multer')

const transactionRouter: Router = Router()

transactionRouter.post('/transaction/create',
(req,res) => createTransactionController.execute(req,res)  )

export { transactionRouter }