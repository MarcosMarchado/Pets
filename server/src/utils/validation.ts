import emailValidator from 'validator'

function existsOrError(value: string, msg: string) {
    if (!value) throw msg
}

function isEmail(value: string, msg: string) {
    if (!emailValidator.isEmail(value)) throw msg
}

function equalsOrError(valueA: string, valueB: string, msg: string) {
    if (valueA === valueB) throw msg
}


export default { existsOrError, equalsOrError, isEmail }