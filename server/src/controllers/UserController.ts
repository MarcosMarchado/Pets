import { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import User from '../model/UserSchema'
import validation from '../utils/validation'
import Auth from '../utils/auth-service'
const auth = new Auth()

function encryptPassword(password: string) {
    const salt = bcrypt.genSaltSync(10)
    return bcrypt.hashSync(password, salt)
}

export default class UserController {

    async signup(req: Request, res: Response) {
        const { name, password, email } = req.body

        try {
            validation.isEmail(email, "E-mail inválido.")
            validation.existsOrError(name, "Nome não informado.")
            validation.existsOrError(password, "Senha não informada.")
            validation.existsOrError(email, "E-mail não informada.")
        } catch (msg) {
            return res.json(msg)
        }

        const userFromDB = await User.findOne({ email })
        if (userFromDB) return res.json("E-mail já cadastrado")

        await User.create({
            name,
            password: encryptPassword(password),
            email
        })
        return res.json("Cadastro feito com Sucesso!")

    }

    async signin(req: Request, res: Response) {
        const { email, password } = req.body

        try {
            validation.existsOrError(email, "Informe o E-mail.")
            validation.existsOrError(password, "Informe a senha.")
        } catch (msg) {
            return res.status(400).send(msg)
        }

        const user = await User.findOne({ email })
        if (!user) return res.status(400).send("Usuário não encontrado.")

        const isMatch = bcrypt.compareSync(password, user.password)
        if (!isMatch) return res.status(400).send("Senha inválida.")

        const token = auth.generateToken({
            id: user._id,
            name: user.name,
            password: user.password,
            email: user.email
        })

        return res.json({
            id: user._id,
            name: user.name,
            email: user.email,
            token
        })
    }
}



