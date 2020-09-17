const mongoose = require('mongoose')

mongoose.connect("link", { userNewUrlParser: true, useUnifiedTopology: true}, (err) => {
  if(err) return console.log("Erro ao conectar no database!\n"+err)
    console.log("Conectado ao BANCO DE DADOS!")
})

var Schema = mongoose.Schema

var guilda = new Schema({
  guild_id: {
    type: String,
    default: "-/-",
    required: true
  },
  prefixo: {
    type: String,
    default: "g."
  },
})

var Guilda = mongoose.model("Guildas", guilda)
module.exports = {
  Guilda: Guilda  
}
