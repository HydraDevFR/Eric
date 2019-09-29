const Discord = require("discord.js")
exports.run = (client, message, args) =>{

    let user = message.mentions.users.first() ? message.mentions.users.first() : message.author
    if(message.mentions.users.size === 0) {

        return message.channel.send("Tu peux pas envoyer de cookie sans mentionner une personne...")
    }
    let embedaR = new Discord.RichEmbed()
    .setTitle("Expédition")
    .setColor('#835526')
    .setFooter("Love cookie")
    .setImage("https://cdn.discordapp.com/attachments/491233872369942530/494917938206212119/5IwaVMJ.jpg")
    .addField("Cookie", `Tu envois un cookie à ${user.username}#${user.discriminator}.`)

    message.channel.send(embedaR)
}
exports.help = {
    name: "cookie",
    description: "Envois un cookie à une personne",
    usage: "&cookie"
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["cookie"]
}
