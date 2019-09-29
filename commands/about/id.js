exports.run = (client, message, args) =>{

        let user = message.mentions.users.first() ? message.mentions.users.first() : message.author
        let id = user.id
        message.channel.send(`Voici l'id de ${user.username}#${user.discriminator} : ${id}`)
    
}
exports.help = {
        name: "id",
        description: "Affiche l'id d'un player"
    }
    
    exports.conf = {
        enabled: true,
        guildOnly: false,
        aliases: ["id"]
    }