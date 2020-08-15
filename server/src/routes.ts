import express from 'express'
import Auth from './utils/auth-service'
const routes = express.Router()

const auth = new Auth()

import UserController from './controllers/UserController'
import ProfileController from './controllers/ProfileController'


const userController = new UserController()
const profileController = new ProfileController()


routes.post('/signup', userController.signup)
routes.post('/signin', userController.signin)
routes.get('/success', auth.authorize, profileController.success)

export default routes



