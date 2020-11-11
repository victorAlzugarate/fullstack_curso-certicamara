import { Router } from 'express'

// Middleware
import { auth } from '../../../core'

// Import Controllers
import {
    wellcomeUserController,
    loginUserController,
    createUserController,
    changePasswordUserController,
    toggleActiveUserController
} from '../controllers'

const userRouter : Router = Router()

userRouter.get('/user/wellcome/:name', auth,
    (req, res) => wellcomeUserController.execute(req, res))

userRouter.post('/user',
    (req, res) => loginUserController.execute(req, res))

userRouter.post('/user/create',
    (req, res) => createUserController.execute(req, res))

userRouter.put('/user/changePassword', auth,
    (req, res) => changePasswordUserController.execute(req, res))

userRouter.put('/user/toggleActive', auth,
    (req, res) => toggleActiveUserController.execute(req, res))

export { userRouter }