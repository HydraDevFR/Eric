exports.run = (client,message) => {
    message.channel.sendMessage('Temps de latence avec le serveur : `' + `${message.createdTimestamp - Date.now()}` + ' ms`');
}
exports.help = {
    name: "ping",
    description: "Connaître le ping."
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["ping"]
}