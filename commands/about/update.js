exports.run = (client, message, args) =>{
    const Discord = require("discord.js")
    var se_embed = new Discord.RichEmbed()
                    .setColor('RANDOM')
                    .setTitle('Mise à jour du client')
                    .addField('Ajoute de la commande', 'b!userinfo pour retrouver vos informations.')
                    .addField('Mise à jour de la commande', 'b!help.')
                    .addField('Mise à jour de la commande', 'b!info.')
                    .setThumbnail('https://cdn.discordapp.com/attachments/436437812963966976/436948779233706004/IMG_20180417_185715_598.jpg')
                    .setFooter('By Boulangerie™️')
                    message.channel.sendEmbed(se_embed)
                    console.log('Commande bien envoyé')
}
exports.help = {
    name: "update",
    description: "Connaître les updates du bot."
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["update"]
}