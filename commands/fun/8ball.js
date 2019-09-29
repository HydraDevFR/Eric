const Discord = require("discord.js")
exports.run = (clinet, message, args) =>{
    let tte = args.join(" ")
            if(!tte){
                return message.reply("Merci de poser une question :8ball:")};

                var replys = [
                    "Oui",
                    "Non",
                    "Peut être",
                    "Certainement",
                    "Je pense ne pas pouvoir répondre à ta question.",
                    "Je ne peux pas te le dire",
                    "Un jour surement",
                ];

                let reponse = (replys[Math.floor(Math.random() * replys.length)])
                var bembed = new Discord.RichEmbed()
                .setDescription(":8ball: 8ball")
                .setColor("RANDOM")
                .addField("Question : ", tte)
                .addField("Réponse : ", reponse)
                message.channel.sendEmbed(bembed)
               


}
exports.help = {
    name: "8ball",
    description: "Réponds à ta question.",
    usage: "b!8ball {question}"
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["8b"]
}