const Discord = require('discord.js')

exports.run = (client, message) => {

    let raison = message.content.split(" ").slice(2).join(" ");
    let modlog = client.channels.find('name', 'mod-log');
    if (!modlog) return message.reply('Je ne trouve pas le salon `mod-log`').catch(console.error);

        if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) {
            return message.channel.send("Vous ne pouvez pas expulser des membres du serveur.")
        }

        if(message.mentions.users.size === 0) {
            return message.channel.send("Veuillez préciser l'utilisateur à expulser.")
        }

        let userkick = message.guild.member(message.mentions.users.first())

        if(!userkick.kickable) {
            return message.channel.send("Vous ne pouvez pas expulser cet utilisateur.")
        }

        if(!userkick) {
            return message.channel.send("Cet utilisateur est introuvable.")
        }

        if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) {
            return message.channel.send("Je n'ai pas la permission d'expulser des membres.")
        }

        if(!raison) {
            raison = "Pas de raison précisée."
        }

        let userkickusername = message.mentions.users.first().username

        var kickmsg = new Discord.RichEmbed()
            .setColor('FFA500')
            .setTitle("Vous avez été kick sur le serveur " + message.guild.name)
            .addField("Par : ", message.author.username + "#" + message.author.discriminator)
            .addField("Raison : ", raison)
            .setTimestamp(new Date)
            .setFooter(client.user.username, client.user.avatarURL)
            .setThumbnail('https://cdn.discordapp.com/avatars/439715373223378944/7c291c50bb3a7f94845611001dfca7e8.png?size=2048')
            let sendembd = userkick.send(kickmsg)
        sendembd

        sendembd.then(member => {
            message.channel.send(`${userkickusername} a été kick.`)
            userkick.kick()
        });
        return client.channels.get(modlog.id).sendEmbed(kickmsg);
}

exports.help = {
    name: "kick",
    description: "Kick un utilisateur"
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["kick"]
}