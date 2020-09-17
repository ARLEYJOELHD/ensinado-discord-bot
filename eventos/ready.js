module.exports = async (bot) => { //faz algo qdo o bot liga
  console.log('!!! estou pronto para ser usado !!!\n  To de olho em '+bot.channels.cache.size+' canais (chats + calss)');

  const avatares = [
    "https://i0.wp.com/gamelogia.com.br/wp-content/uploads/2016/11/gamer.jpg?resize=1280%2C640&ssl=1",
    "https://www.torredevigilancia.com/wp-content/uploads/2019/10/coringa-55.jpg",
    "https://imagens.usp.br/wp-content/uploads/Campus-15-Foto-Marcos-Santos20101220_066.jpg"
  ] 
  
  const status = [
    "online",
    "dnd",
    "idle"
  ]
  
  const atividades = [
     ["Trap", "LISTENING"],
     ["Minecraft", "PLAYING"],
     ["Se inscreve", "WATCHING"],
     ["Dá like", "WATCHING"]
    ];
  setInterval(async () => { // controlar o intervalo
    let i = Math.floor(Math.random() * atividades.length + 1) - 1
      await bot.user.setActivity(atividades[i][0], { type: atividades [i][1] });
  }, 10000); // intervalo

  setInterval(async () => {
    let b = Math.floor(Math.random() * status.length + 1) - 1
      await bot.user.setStatus(status[b])
  }, 20000)

  setInterval(async () => {
    let c = Math.floor(Math.random() * avatares.length + 1) - 1
      await bot.user.setAvatar(avatares[c])
  }, 400000)

}