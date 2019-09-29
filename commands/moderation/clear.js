exports.run = (client, message, args) =>{

    if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.channel.send("Vous n'avez pas la permission !")

                if(isNaN(parseInt(args[0]))) return message.channel.send("Veuillez entrer un nombre valide.")
                if(!args[0]) return message.channel.send("Tu dois préciser le nombre de message à supprimer. ( Minimum : 2 Maximum : 99. Pour l'instant celui qui met une lettre prend un warn (pour l'instant)")
                message.channel.bulkDelete(args[0]).then(() => {
                    message.channel.send(`${args[0]} messages ont été supprimés.`)

                })
}
exports.help = {
    name: "clear",
    description: "Supprime les messages.",
    usage: "&clear {nombre de message}"
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["prune", "purge"]
}