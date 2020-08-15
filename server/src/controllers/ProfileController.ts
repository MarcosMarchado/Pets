import { Request, Response } from 'express'
import Auth from '../utils/auth-service'

const auth = new Auth()

interface Data {
    id: string,
    user: string,
    email: string,
}

export default class ProfileController {
    async success(req: Request, res: Response) {
        const token = req.body.token || req.query.token || req.headers['x-access-token']
        const data = auth.decodeToken(token)

        console.log(data)
        return res.status(200).send({
            id: (<any>data).id,
            name: (<any>data).name,
            email: (<any>data).email,
        })
    }
}
