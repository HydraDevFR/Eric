const Discord = require("discord.js")
exports.run = (client, message, args) =>{


    var d = new Date
    let embed = new Discord.RichEmbed()
    .setAuthor(client.user.username, client.user.avatarURL)
    .setColor("RANDOM")
    .setTitle("Date du jour !")
    .addField('__Nous sommes actuellement le__', d)
    .setTimestamp()
    message.channel.send(embed)
}
exports.help = {
    name: "date",
    description: "Pour savoir la date du jour."
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["date"]
}