import mongoose, { Document } from 'mongoose'

const User = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
})

interface UserProps extends Document {
    name: string;
    email: string;
    password: string;
}

export default mongoose.model<UserProps>('User', User)