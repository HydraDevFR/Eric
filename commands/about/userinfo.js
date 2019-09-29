const Discord = require('discord.js')
const moment = require('moment')
moment.locale('fr')

exports.run = (client, message, args) => {

    String.prototype.capitalize = function() {
        return this.charAt(0).toUpperCase() + this.slice(1);
    }

    var usr;

    if(!args[0]) {
        usr = message.member
    }
    else if(message.guild.members.some(usr => usr.id === args[0])) {
        usr = message.guild.members.get(args[0])
    }
    else if(message.mentions.members.first()) {
        usr = message.mentions.members.first()
    }
    else if(message.guild.members.some(usr => usr.user.username === args.join(" "))) {
        usr = message.guild.members.find(usr => usr.user.username === args.join(" "))
    }
    else if(usr === undefined) {
        return message.channel.send("L'utilisateur demandé n'existe pas. Essayez avec l'identifiant, le nom ou la mention.")
            
    }
        let usericon = usr.user.avatarURL
        let onthesrv = usr.joinedAt
        let usercreate = usr.user.createdAt
        var onthesrvf = moment(onthesrv).format('dddd Do MMMM YYYY, HH:mm:ss')
        var onthesrvfr = onthesrvf.substring(0,1).toLocaleUpperCase() + onthesrvf.substring(1);
        var usrf = moment(usercreate).format('dddd Do MMMM YYYY, HH:mm:ss')
        var usrfr = usrf.substring(0,1).toLocaleUpperCase() + usrf.substring(1);
        var ubot = usr.user.bot === true ? "<:done:473803590532595712>" : "<:nope:473803719440597003>";
        let ui_embed = new Discord.RichEmbed()
            .setColor('7EBCAD')
            .setAuthor(`Information sur ` + usr.user.tag, usr.user.avatarURL)
            .addField('Username', usr.user.username)
            .addField('Discriminateur', "#" + usr.user.discriminator)
            .addField('ID', usr.id)
            .addField('Tag', usr.user.tag)
            .addField('Statut', usr.presence.status)
            .addField('Utilisateur bot', ubot)
            .setTimestamp(new Date)
            .addField('Date de création du compte', usrfr)
            .addField('Date d\'\arrivée sur le serveur', onthesrvfr)
            .setThumbnail(usericon)
            .setFooter(client.user.username, client.user.avatarURL)
        message.channel.send(ui_embed)
        console.log('ui envoyé')
}

exports.help = {
    name: "userinfo",
    description: "Avoir des informations sur un utilisateur"
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["ui"]
}