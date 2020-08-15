import jwt from 'jsonwebtoken'
import secret from '../utils/config'
import { Request, Response, NextFunction } from 'express'

class Auth {
    generateToken(data: object) {
        return jwt.sign(data, secret, { expiresIn: '1d' }) //gerar Token
    }

    decodeToken(token: string) {
        const data = jwt.verify(token, secret)
        return data;
    }

    authorize(req: Request, res: Response, next: NextFunction) {
        const token = req.body.token || req.query.token || req.headers['x-access-token'];
        if (!token) {
            return res.status(400).send("Acesso negado.")
        } else {
            jwt.verify(token, secret, function (error: any, decoded: any) {
                if (error) {
                    res.status(401).json("Credenciais inválidas.");
                } else {
                    next();
                }
            });
        }
    }

}

export default Auth