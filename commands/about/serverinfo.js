const Discord = require('discord.js')
const moment = require('moment')
moment.locale('fr')

exports.run = (client, message) => {

    String.prototype.capitalize = function() {
        return this.charAt(0).toUpperCase() + this.slice(1);
    }

    var orderroles = message.guild.roles.sort((x,y)=> y.position - x.position).map(role=> role.name).join(', ');
    if(message.guild.roles.length > 5) {
        orderroles = `Trop de rôles. (${roles.length})`
    }
    var linecount = message.guild.members.filter(onlinesize => onlinesize.presence.status === "online")
    var allbots = message.guild.members.filter(sizebots => sizebots.user.bot === true)

        let servercreatedatef = moment(message.guild.createdAt).format("DD/MM/YY HH:mm:ss");
        let servercreatedatefr = servercreatedatef.substring(0,1).toLocaleUpperCase() + servercreatedatef.substring(1);
        var si_embed = new Discord.RichEmbed()
        .setThumbnail(message.guild.avatarURL)
        .setColor('7EBCAD')
        .setAuthor(message.guild.name, message.guild.iconURL)
        .setThumbnail(message.guild.iconURL)
        .addField('Propriétaire du serveur', message.guild.owner.user.tag, true)
        .addField('ID', message.guild.id, true)
        .addField('Membres', message.guild.memberCount, true)
        .addField('Humains', message.guild.memberCount - allbots.size, true)
        .addField('Bots', allbots.size, true)
        .addField('En ligne', linecount.size, true)
        .setTimestamp(new Date)
        .addField("Nombre de canaux ", message.guild.channels.size, true)
        .addField("Nombre de rôles ", message.guild.roles.size, true)
        .addField('Création du serveur ', servercreatedatefr, true)
        .addField('Région du serveur ', message.guild.region, true)
        .setFooter(client.user.username, client.user.avatarURL)
    message.channel.send(si_embed)

}

exports.help = {
    name: "serverinfo",
    description: "Donner des informations sur le serveur."
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["si", "infoserveur"]
}