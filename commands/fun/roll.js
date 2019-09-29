const Discord = require("discord.js")
exports.run = (client, message, args) =>{
    var roll = ["Pile", "Face"]
            var temp = roll[Math.floor(Math.random() * 2)]
            var embed = new Discord.RichEmbed()
                .setColor("RANDOM")
                .setAuthor("Pile ou Face", client.user.avatarURL)
                .setDescription(":dollar: Vous êtes tombé sur "+temp)
                .setFooter(client.user.username+" - by Salam#3122")
            message.channel.sendEmbed(embed);
            
}
exports.help = {
    name: "roll",
    description: "Jouer à pille ou face."
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["roll"]
}