exports.run = (client, message, args) =>{

    message.channel.send("(°-°)\\ ┳━┳").then(sentMessage => {
        setTimeout(() => {
            sentMessage.edit('(╮°-°)╮┳━┳')
            setTimeout(() => {
                sentMessage.edit("(╯°□°)╯    ]")
                setTimeout(() => {
                    sentMessage.edit('(╯°□°)╯  ︵  ┻━┻')
                }, 750)
            }, 750)
        }, 750)
    })

}
exports.help = {
    name: "tableflip",
    description: "Meme animé"
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["tb"]
}