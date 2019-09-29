const math = require("mathjs")
const Discord = require("discord.js")
exports.run = (client, message, args, tools) =>{
    if (!args[0]) return message.channel.send('Merci de fournir un calcul.')



    let resp;
    try{
        resp = math.eval(args.join(' '));
    } catch (e) {
        return message.channel.send("Merci de fournir un calcul valable.")
    }

    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle("MATH")
    .addField('Calcul', `\`\`\`js\n${args.join(' ')}\`\`\``)
    .addField('Résulat', `\`\`\`js\n${resp}\`\`\``)
    message.channel.send(embed);
    



}

exports.help = {
    name: "math"
}

exports.conf = {
    enabled: true,
    dm: true,
    aliases: ["googleit"]
}