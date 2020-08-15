import mongoose from 'mongoose'

mongoose.connect("mongodb+srv://marcos:marcos@authentication.solzn.mongodb.net/Authentication?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(e => console.log("Conectado"))
    .catch(err => console.log("Erro:" + err))

export default mongoose
