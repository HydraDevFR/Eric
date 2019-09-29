const Discord = require("discord.js");
 module.exports.run =  (client, message, args) => {
      const sayMessage = args.join(" ");
      message.delete().catch();
      message.channel.send(sayMessage);
 }

exports.help = {
    name: "say",
    description: "Faire parler le bot"
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["s"]
}