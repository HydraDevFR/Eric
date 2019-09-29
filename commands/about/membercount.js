const Discord = require("discord.js")
exports.run = (client, message, args) =>{
    var linecount = message.guild.members.filter(onlinesize => onlinesize.presence.status === "online")
    var allbots = message.guild.members.filter(sizebots => sizebots.user.bot === true)
    var embede = new Discord.RichEmbed() 
        
        .setColor("RANDOM")
        .setThumbnail(message.guild.avatarURL)
        .setAuthor(message.guild.name, message.guild.iconURL)
        .setAuthor(message.guild.name, message.guild.iconURL)
        .addField('Membres', message.guild.memberCount)
        .addField("Online", linecount.size, true)
        .addField("Humain", message.guild.memberCount - allbots.size, true)
        .addField("Bot", allbots.size, true)
        .setTimestamp(new Date)
        .setFooter(client.user.username, client.user.avatarURL)
        message.channel.send(embede);
    
  }
  exports.help = {
    name: "Membercount",
    description: "Affiche le nombre de membres dans le serveur."
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["mc", "membercount"]
}