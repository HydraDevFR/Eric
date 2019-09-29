const Discord = require('discord.js')

exports.run = (client, message) => {

    let raison = message.content.split(" ").slice(2).join(" ");
    let modlog = client.channels.find('name', 'mod-log');
    if (!modlog) return message.reply('Je ne trouve pas le salon `mod-log`').catch(console.error);
        if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) {
            return message.channel.send("Vous ne pouvez pas bannir des membres du serveur.")
        }

        if(message.mentions.users.size === 0) {
            return message.channel.send("Veuillez préciser l'utilisateur à bannir.")
        }

        let userban = message.guild.member(message.mentions.users.first())

        if(!userban.kickable) {
            return message.channel.send("Vous ne pouvez pas bannir cet utilisateur.")
        }

        if(!userban) {
            return message.channel.send("Cet utilisateur est introuvable.")
        }

        if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) {
            return message.channel.send("Je n'ai pas la permission de bannir des membres.")
        }

        if(!raison) {
            raison = "Pas de raison précisée."
        }

        let userbanusername = message.mentions.users.first().username
    

        var banmsg = new Discord.RichEmbed()
            .setColor('B02527')
            .setTitle("Vous avez été banni sur le serveur " + message.guild.name)
            .addField("Par : ", message.author.username + "#" + message.author.discriminator)
            .addField("Raison : ", raison)
            .setTimestamp(new Date)
            .setFooter(client.user.username, client.user.avatarURL)
            .setThumbnail('https://cdn.discordapp.com/avatars/439715373223378944/7c291c50bb3a7f94845611001dfca7e8.png?size=2048')
            let sendembd = userban.send(banmsg)
        sendembd

        sendembd.then(member => {
            message.channel.send(`${userbanusername} a été ban.`)
            userban.ban()
        })
        return client.channels.get(modlog.id).sendEmbed(banmsg);
}
exports.help = {
    name: "ban",
    description: "Sert à bannir les joueurs.",
    usage: "b!ban {utilisateur}"
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["ban"]
}