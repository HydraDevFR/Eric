exports.run = (client, message, args) =>{

    message.delete().catch();
        message.channel.send(`${message.author.username} te souhaite la bienvenue sur le serveur !`)
}
exports.help = {
    name: "bienvenue",
    description: "Souhaite la bienvenue à un utilisateur.",
    usage : "b!bienvenue"
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["b"]
}