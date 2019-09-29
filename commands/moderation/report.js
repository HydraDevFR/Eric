const Discord = require('discord.js')

exports.run = (client, message) => {

    var reportargs = message.content.split().toString().slice(9)

    if(!reportargs) {
        message.channel.send("Merci de préciser la raison de ce report. Si vous avez des preuves merci de nous les fournir.")
    }
    else {

    let reportguild = client.guilds.get("374986045458087951")
        let reportcha = reportguild.channels.get("476018842158497802")

        let guildicon = message.guild.iconURL
        let reportdate = message.createdAt.toString().split(" ")
        let useravatar = message.author.avatarURL
        let reportembed = new Discord.RichEmbed()
            .setColor("7EBCAD")
            .setAuthor(`Nouveau report par ${message.author.username}#${message.author.discriminator} !`, guildicon)
            .addField("Depuis le serveur :", message.guild.name)
            .addField("Date du report :", reportdate[0] + ' ' + reportdate[2] + ' ' + reportdate[1] + ' ' + reportdate[3] + ", " + reportdate[4])
            .addField('Argumentation :', reportargs)
            .setThumbnail(useravatar)
            .setTimestamp(new Date)
            .setFooter(client.user.username, client.user.avatarURL)
        reportcha.send(reportembed)
        message.channel.send("Votre report a bien été envoyé ! Nous vous donnerons des informations dès que possible !")
    }
}
exports.help = {
    name: "report",
    description: "Report un utilisateur"
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["report"]
}
