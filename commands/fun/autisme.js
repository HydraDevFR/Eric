const Discord = require("discord.js")
exports.run = (client, message, args) =>{

    let user = message.mentions.users.first() ? message.mentions.users.first() : message.author
    if (user.id === "441162184337391626") {
        let tauxdAutisme = 0
        let colorWtf = 0
        let embedaR = new Discord.RichEmbed()
            .setTitle(`Le taux d'autisme de ${user.username}#${user.discriminator} est de :`)
            .setColor(colorWtf)
            .setFooter("Tout ceci est du second degré !", "https://cdn.discordapp.com/attachments/440633466128695308/458554014569725954/warn.png")
            .addField(`${tauxdAutisme}%`, "Il faudrait quand même penser à aller consulter !")
        message.channel.send(embedaR)
    } else {
        var ran = Math.random()
        var tauxdAutisme = Math.floor(ran * 100)
        var colorWtf = Math.floor(ran * 16777214) + 1
        let embedaR = new Discord.RichEmbed()
            .setTitle(`Le taux d'autisme de ${user.username}#${user.discriminator} est de :`)
            .setColor(colorWtf)
            .setThumbnail('https://cdn.discordapp.com/attachments/440633466128695308/458554014569725954/warn.png')
            .setFooter("Tout ceci est du second degré !", "attachment://warn.png")
            .attachFile("https://cdn.discordapp.com/attachments/440633466128695308/458554014569725954/warn.png")
            .addField(`${tauxdAutisme}%`, "Il faudrait quand même penser à aller consulter !")
            .setTimestamp()
        message.channel.send(embedaR)
    }

}


exports.help = {
    name: "autisme",
    description: "Détermine ton pourcentage d'autisme.",
    usage: "b!autisme (joueur)"
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["autism"]
}