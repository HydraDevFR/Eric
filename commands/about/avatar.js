const Discord = require('discord.js')

exports.run = (client, message) => {

    let user = message.mentions.users.first() ? message.mentions.users.first() : message.author
        let avataruser = user.avatarURL
        let avem = new Discord.RichEmbed()
            .setColor('7EBCAD')
            .setTitle(`Voici l'avatar de ${user.username}#${user.discriminator} :`)
            .setImage(avataruser)
            .setTimestamp(new Date)
            .setFooter(client.user.username, client.user.avatarURL)
        message.channel.send(avem)
}
exports.help = {
    name: "avatar",
    description: "Donne l'avatar d'un utilisateur",
    usage: "b!avatar {utilisateur}"
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["pp"]
}