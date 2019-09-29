var moment = require(`moment`)
moment.locale('fr');
const Discord = require(`discord.js`)

exports.run = (client, message, args) => {

    String.prototype.capitalize = function() {
        return this.charAt(0).toUpperCase() + this.slice(1);
    }
    var emo
    if (!args[0]) return message.channel.send(`<:facepalm:474618049828356137> Ok mais de quel emoji tu parles ?...\nUtilisation de la commande : \`=emoji <emoji>\``)
    if (message.guild.emojis.exists(`name`, args[0])) {
        emo = message.guild.emojis.find(`name`, args[0])
    }
    else {
        let idav = args[0].substr(-19).substring(0, 18)
        
        emo = message.guild.emojis.find(`id`, idav)
    }
    if (!emo) {
        message.channel.send(`<:facepalm:474618049828356137> Merci de rentrer un emoji du serveur...`);
    }
    else {
        var emoicn = emo.url;
        var emodate = emo.createdAt;
        var emof = moment(emodate).format('dddd Do MMMM YYYY, HH:mm:ss');
        var emofr = emof.substring(0,1).toLocaleUpperCase() + emof.substring(1);
        /*var emodater = moment(emodate, `DDDD/MMMM/YYYY HH:mm:ss`).locale('fr');
        console.log(emodater)*/
        var u = emo.animated === true ? `<:ballot_box_with_check:475990314046324746>` : `<:x:475990432191610911>`;

        let embedaR = new Discord.RichEmbed()
            .setTitle(`Informations de l'emoji :`)
            .setColor(Math.floor(Math.random() * 16777214) + 1)
            .setThumbnail(emoicn)
            .setFooter(`By @KhoEn#3122  `)
            .addField(`Nom`, `\`${emo.name}\``, true)
            .addField(`Id`, `\`${emo.id}\``, true)
            .addField(`Nom complet`,`\`<:${emo.identifier}>\``)
            .addField(`Animé ?`, u, true)
            .addField(`Créé le :`, `\`${emofr}\``, true)
            .setTimestamp()
        message.channel.send(embedaR)
    }
}
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [`e`, `emote`],
};

exports.help = {
    name: `emoji`,
    description: `Montrer les infos d'un emoji`,
    usage: `=emoji <emoji>`
};