import * as express from 'express'

import { userRouter, clientRouter, transactionRouter } from '../../../modules'

const router = express.Router()

router.use('/v1',
    userRouter,
    clientRouter,
    transactionRouter,
)

export { router }