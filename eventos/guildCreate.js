module.exports = async (bot, guild) => { //faz algo qdo o bot liga
  await bot.Database.Guilda.findOne({
    "guild_id": guild.id
  }, function (erro, documento) {
    if(documento) {
      documento.prefixo = "g."  
      documento.save()
    } else {
      new bot.Databse.Guilda({
        guild_id: guild.id,
        prefixo: "g.",
      }).save()
    }
    if(erro) {
      console.log(erro)
    }
  })
  
console.log("Eu fui adicionado na guilda: "+guild.name)

}