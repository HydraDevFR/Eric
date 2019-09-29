
const Discord = require('discord.js')

exports.run = (client, message, args) => {

    var embedcolor = '7EBCAD'

    if(!args[0]) {
        var help_embed = new Discord.RichEmbed()
            .setColor('7EBCAD')
            .setTitle('Commandes du bot')
            .setDescription('Rappel : Les caractères tels que [], {} ou <> ne doivent pas être utilisés lors de l\'exécution de votre commande. \nNote : Vous pouvez aussi faire `&help {commande}` pour avoir plus d\'informations sur celle-ci.\n\n')
            .addField('\n\nModération :', "`kick` `ban` `purge` `warns` `lockdown` `say` `prefix`")
            .addField('\n\nUtilitaires :', "`help` `avatar` `id` `serverinfo` `channelinfo` `userinfo` `report` `update`  `emoji` `date` `info` `membercount` ")
            .addField('\n\nFun :', "`ping` `say` `tableflip` `meme` `suicide` `8ball` `roll` `autisme` `bienvenue` `math`")
            .setThumbnail('https://cdn.discordapp.com/avatars/439715373223378944/7c291c50bb3a7f94845611001dfca7e8.png?size=2048')
            .setTimestamp(new Date)
            .setFooter(client.user.username, client.user.avatarURL)
        message.author.send(help_embed)
        message.reply('regarde tes messages privés !')
        console.log('Help envoyé')}
else {
    if(args[0] === "ping") {
    let pingembd = new Discord.RichEmbed()
        .setColor('7EBCAD')
        .setTitle('Commande : ping')
        .addField('Description de la commande', "Affiche le ping du bot.")
        .addField('Rappel', "Les caractères tels que [], {} ou <> ne doivent pas être utilisés lors de l'exécution de votre commande. ")
        .addField('Utilisation', "`&ping`")
        .setTimestamp(new Date)
        .setThumbnail(client.user.avatarURL)
        .setFooter(client.user.username, client.user.avatarURL)
        message.channel.send(pingembd)
    }
    else {
        if(args[0] === "avatar") {
            let avatarembd = new Discord.RichEmbed()
                .setColor('7EBCAD')
                .setTitle('Commande : avatar')
                .addField('Description de la commande', "Affiche l'avatar d'un utilisateur mentionné ou le vôtre.")
                .addField('Rappel', "Les caractères tels que [], {} ou <> ne doivent pas être utilisés lors de l'exécution de votre commande. ")
                .addField('Utilisation', "`&avatar`" + "\n`&avatar {utilisateur}`")
                .setTimestamp(new Date)
                .setThumbnail(client.user.avatarURL)
                .setFooter(client.user.username, client.user.avatarURL)
            message.channel.send(avatarembd)
        }
        else {
            if(args[0] === "kick") {
                let kickembd = new Discord.RichEmbed()
                    .setColor('7EBCAD')
                    .setTitle('Commande : kick')
                    .addField('Description de la commande', 'Permet d\'\expulser un utilisateur du serveur avec la permission "KICK_MEMBERS".')
                    .addField('Rappel', "Les caractères tels que [], {} ou <> ne doivent pas être utilisés lors de l'exécution de votre commande.")
                    .addField('Utilisation', "`&kick {utilisateur} {raison}`\n`&kick {utilisateur}`")
                    .setTimestamp(new Date)
                    .setThumbnail(client.user.avatarURL)
                    .setFooter(client.user.username, client.user.avatarURL)
                message.channel.send(kickembd)
            }
            else {
                if(args[0] === "kick") {
                    let kickembd = new Discord.RichEmbed()
                        .setColor('7EBCAD')
                        .setTitle('Commande : cookie')
                        .addField('Description de la commande', 'Envois un cookie à une personne.')
                        .addField('Rappel', "Les caractères tels que [], {} ou <> ne doivent pas être utilisés lors de l'exécution de votre commande.")
                        .addField('Utilisation', "`&cookie {utilisateur}")
                        .setTimestamp(new Date)
                        .setThumbnail(client.user.avatarURL)
                        .setFooter(client.user.username, client.user.avatarURL)
                    message.channel.send(kickembd)
                }
            if(args[0] === "membercount") {
                let purgeembd = new Discord.RichEmbed()
                    .setColor(embedcolor)
                    .setTitle('Commande : membercount')
                    .addField('Description de la commande', "Permet d'afficher le nombre d'utilisateurs sur le serveur.")
                    .addField('Rappel', "Les caractères tels que [], {} ou <> ne doivent pas être utilisés lors de l'exécution de votre commande.")
                    .addField('Utilisation', "`&membercount`")
                    .setTimestamp(new Date)
                    .setThumbnail(client.user.avatarURL)
                    .setFooter(client.user.username, client.user.avatarURL)
                message.channel.send(purgeembd)
            }
            else {
                if(args[0] === "ban") {
                    let banembd = new Discord.RichEmbed()
                        .setColor('7EBCAD')
                        .setTitle('Commande : Ban')
                        .addField('Description de la commande', 'Permet de bannir un utilisateur du serveur avec la permission "BAN_MEMBERS".')
                        .addField('Rappel', "Les caractères tels que [], {} ou <> ne doivent pas être utilisés lors de l'exécution de votre commande.")
                        .addField('Utilisation', "`&ban {utilisateur} {raison}`\n`&ban {utilisateur}`")
                        .setTimestamp(new Date)
                        .setThumbnail(client.user.avatarURL)
                        .setFooter(client.user.username, client.user.avatarURL)
                    message.channel.send(banembd)
                }
                else {
                    if(args[0] === "clear") {
                        let purgeembd = new Discord.RichEmbed()
                            .setColor(embedcolor)
                            .setTitle('Commande : clear')
                            .addField('Description de la commande', 'Permet d\'\effacer un nombre de message définini avec la permission "MANAGE_MESSAGES".')
                            .addField('Rappel', "Les caractères tels que [], {} ou <> ne doivent pas être utilisés lors de l'exécution de votre commande.")
                            .addField('Utilisation', "`&clear {nombre de message}`")
                            .setTimestamp(new Date)
                            .setThumbnail(client.user.avatarURL)
                            .setFooter(client.user.username, client.user.avatarURL)
                        message.channel.send(purgeembd)
                    }
                    if(args[0] === "math") {
                        let purgeembd = new Discord.RichEmbed()
                            .setColor(embedcolor)
                            .setTitle('Commande : math')
                            .addField('Description de la commande', 'Permet de calculer une opération.')
                            .addField('Rappel', "Les caractères tels que [], {} ou <> ne doivent pas être utilisés lors de l'exécution de votre commande.")
                            .addField('Utilisation', "`&math {opération}`")
                            .setTimestamp(new Date)
                            .setThumbnail(client.user.avatarURL)
                            .setFooter(client.user.username, client.user.avatarURL)
                        message.channel.send(purgeembd)
                    }
                    else{
                        if(args[0] === "lockdown") {
                            let purgeembd = new Discord.RichEmbed()
                                .setColor(embedcolor)
                                .setTitle('Commande : lockdown')
                                .addField('Description de la commande', 'Permet de bloquer un salon avec la permission "MANAGE_CHANNELS".')
                                .addField('Rappel', "Les caractères tels que [], {} ou <> ne doivent pas être utilisés lors de l'exécution de votre commande.")
                                .addField('Utilisation', "`&lockdown {temps [s, m, h]}`")
                                .setTimestamp(new Date)
                                .setThumbnail(client.user.avatarURL)
                                .setFooter(client.user.username, client.user.avatarURL)
                            message.channel.send(purgeembd)

                    }
                    else {
                        if(args[0] === "warns") {
                            let warnembed = new Discord.RichEmbed()
                                .setColor(embedcolor)
                                .setTitle("Commande : warns")
                                .addField('Description de la commande :', 'Permet d\'\avertir un utilisatzeur en message privé avec la permission "KICK_MEMBERS".')
                                .addField('Rappel', "Les caractères tels que [], {} ou <> ne doivent pas être utilisés lors de l'exécution de votre commande.")
                                .addField('Utilisation', "`&warn {utilisateur} {raison}`")
                                .setThumbnail(client.user.avatarURL)
                                .setTimestamp(new Date)
                                .setFooter(client.user.username, client.user.avatarURL)
                            message.channel.send(warnembed)
                        }
                        else {
                            if(args[0] === "help") {
                                let helphelpembed = new Discord.RichEmbed()
                                    .setColor(embedcolor)
                                    .setTitle('Commande : help')
                                    .addField('Description de la commande', "Affiche toutes les commandes disponibles sur le bot.")
                                    .addField('Rappel', "Les caractères tels que [], {} ou <> ne doivent pas être utilisés lors de l'exécution de votre commande.")
                                    .addField('Utilisation', "`&help`")
                                    .setThumbnail(client.user.avatarURL)
                                    .setTimestamp(new Date)
                                    .setFooter(client.user.username, client.user.avatarURL)
                                message.channel.send(helphelpembed)
                            }
                                else {
                                    if(args[0] === "id") {
                                        let idembed = new Discord.RichEmbed()
                                            .setColor(embedcolor)
                                            .setTitle("Commande : id")
                                            .addField("Description de la commande", "Affiche l'id d'un utilisateur mentionné.")
                                            .addField('Rappel', "Les caractères tels que [], {} ou <> ne doivent pas être utilisés lors de l'exécution de votre commande.")
                                            .addField("Utilisation", "`&id`\n`&id {utilisateur}`")
                                            .setTimestamp(new Date)
                                            .setThumbnail(client.user.avatarURL)
                                            .setFooter(client.user.username, client.user.avatarURL)
                                        message.channel.send(idembed)
                                    }
                                    else {
                                        if(args[0] === "serverinfo") {
                                            let siembed = new Discord.RichEmbed()
                                                .setColor(embedcolor)
                                                .setTitle("Commande : serverinfo")
                                                .addField("Description de la commande", "Affiche des informations sur le serveur actuel.")
                                                .addField('Rappel', "Les caractères tels que [], {} ou <> ne doivent pas être utilisés lors de l'exécution de votre commande.")
                                                .addField("Utilisation", "`&serverinfo`")
                                                .setTimestamp(new Date)
                                                .setThumbnail(client.user.avatarURL)
                                                .setFooter(client.user.username, client.user.avatarURL)
                                            message.channel.send(siembed)
                                        }
                                            
                                            else {
                                                if(args[0] === "userinfo") {
                                                    let usrembd = new Discord.RichEmbed()
                                                        .setColor(embedcolor)
                                                        .setTitle("Commande : userinfo")
                                                        .addField("Description de la commande", "Affiche vos informations ou celles d'un utilisateur mentionné.")
                                                        .addField('Rappel', "Les caractères tels que [], {} ou <> ne doivent pas être utilisés lors de l'exécution de votre commande.")
                                                        .addField('Utilisation', "`&userinfo`\n`&userinfo {utilisateur}`")
                                                        .setTimestamp(new Date)
                                                        .setThumbnail(client.user.avatarURL)
                                                        .setFooter(client.user.username, client.user.avatarURL)
                                                    message.channel.send(usrembd)
                                                }
                                                else {
                                                    if(args[0] === "say") {
                                                        let sayembed = new Discord.RichEmbed()
                                                            .setColor(embedcolor)
                                                            .setTitle("Commande : say")
                                                            .addField("Description de la commande", "Fait parler le bot.")
                                                            .addField('Rappel', "Les caractères tels que [], {} ou <> ne doivent pas être utilisés lors de l'exécution de votre commande.")
                                                            .addField("Utilisation", "`&say {message}`")
                                                            .setTimestamp(new Date)
                                                            .setThumbnail(client.user.avatarURL)
                                                            .setFooter(client.user.username, client.user.avatarURL)
                                                        message.channel.send(sayembed)
                                                    }
                                            
                                                            else{
                                                                if(args[0] === "suicide"){
                                                                    let suicideembed = new Discord.RichEmbed()
                                                                    .setColor(embedcolor)
                                                                    .setTitle('Commande : suicide')
                                                                    .addField('Description de la commande', "Meme animé.")
                                                                    .addField('Rappel', "Les caractères tels que [], {} ou <> ne doivent pas être utilisés lors de l'exécution de votre commande.")
                                                                    .addField('Utilisation', "`&suicide`")
                                                                    .setTimestamp(new Date)
                                                                    .setThumbnail(client.user.avatarURL)
                                                                    .setFooter(client.user.username, client.user.avatarURL)
                                                                message.channel.send(suicideembed)

                                                                }
                                                                else{
                                                                    if(args[0] === "update"){
                                                                        let updateembed = new Discord.RichEmbed()
                                                                        .setColor(embedcolor)
                                                                        .setTitle('Commande : update')
                                                                        .addField('Description de la commande', "Dernières mises à jour du bot..")
                                                                        .addField('Rappel', "Les caractères tels que [], {} ou <> ne doivent pas être utilisés lors de l'exécution de votre commande.")
                                                                        .addField('Utilisation', "`&update`")
                                                                        .setTimestamp(new Date)
                                                                        .setThumbnail(client.user.avatarURL)
                                                                        .setFooter(client.user.username, client.user.avatarURL)
                                                                    message.channel.send(updateembed)
                                                                    }
                                                                    else{
                                                                        if(args[0] === "tableflip"){
                                                                            let tbembed = new Discord.RichEmbed()
                                                                            .setColor(embedcolor)
                                                                            .setTitle('Commande : tableflip')
                                                                            .addField('Description de la commande', "Meme animé.")
                                                                            .addField('Rappel', "Les caractères tels que [], {} ou <> ne doivent pas être utilisés lors de l'exécution de votre commande.")
                                                                            .addField('Utilisation', "`&tableflip`")
                                                                            .setTimestamp(new Date)
                                                                            .setThumbnail(client.user.avatarURL)
                                                                            .setFooter(client.user.username, client.user.avatarURL)
                                                                        message.channel.send(tbembed)
                                                                        }
                                                                                    else{
                                                                                        if(args[0] === "roll"){
                                                                                            let tbembed = new Discord.RichEmbed()
                                                                                            .setColor(embedcolor)
                                                                                            .setTitle('Commande : roll')
                                                                                            .addField('Description de la commande', "Joueur de pille ou face ? Cette commande est pour vous !")
                                                                                            .addField('Rappel', "Les caractères tels que [], {} ou <> ne doivent pas être utilisés lors de l'exécution de votre commande.")
                                                                                            .addField('Utilisation', "`&roll`")
                                                                                            .setTimestamp(new Date)
                                                                                            .setThumbnail(client.user.avatarURL)
                                                                                            .setFooter(client.user.username, client.user.avatarURL)
                                                                                        message.channel.send(tbembed)
                                                                                        }
                                                                                        else{
                                                                                            if(args[0] === "meme"){
                                                                                                let tbembed = new Discord.RichEmbed()
                                                                                                .setColor(embedcolor)
                                                                                                .setTitle('Commande : meme')
                                                                                                .addField('Description de la commande', "Un meme géant surgit de la commande")
                                                                                                .addField('Rappel', "Les caractères tels que [], {} ou <> ne doivent pas être utilisés lors de l'exécution de votre commande.")
                                                                                                .addField('Utilisation', "`&meme`")
                                                                                                .setTimestamp(new Date)
                                                                                                .setThumbnail(client.user.avatarURL)
                                                                                                .setFooter(client.user.username, client.user.avatarURL)
                                                                                            message.channel.send(tbembed)
                                                                                            }
                                                                                            else{
                                                                                                if(args[0] === "reboot"){
                                                                                                    let tbembed = new Discord.RichEmbed()
                                                                                                    .setColor(embedcolor)
                                                                                                    .setTitle('Commande : reboot')
                                                                                                    .addField('Description de la commande', "Rafraîchir le bot !")
                                                                                                    .addField('Rappel', "Les caractères tels que [], {} ou <> ne doivent pas être utilisés lors de l'exécution de votre commande.")
                                                                                                    .addField('Utilisation', "`&reboot`")
                                                                                                    .setTimestamp(new Date)
                                                                                                    .setThumbnail(client.user.avatarURL)
                                                                                                    .setFooter(client.user.username, client.user.avatarURL)
                                                                                                message.channel.send(tbembed)
                                                                                                }
                                                                                                else{
                                                                                                    if(args[0] === "logout"){
                                                                                                        let tbembed = new Discord.RichEmbed()
                                                                                                        .setColor(embedcolor)
                                                                                                        .setTitle('Commande : logout')
                                                                                                        .addField('Description de la commande', "Le bot se déconnecte suite à cette commande.")
                                                                                                        .addField('Rappel', "Les caractères tels que [], {} ou <> ne doivent pas être utilisés lors de l'exécution de votre commande.")
                                                                                                        .addField('Utilisation', "`&logout`")
                                                                                                        .setTimestamp(new Date)
                                                                                                        .setThumbnail(client.user.avatarURL)
                                                                                                        .setFooter(client.user.username, client.user.avatarURL)
                                                                                                    message.channel.send(tbembed)
                                                                                                    }
                                                                                                    else{
                                                                                                        if(args[0] === "emoji"){
                                                                                                            let tbembed = new Discord.RichEmbed()
                                                                                                            .setColor(embedcolor)
                                                                                                            .setTitle('Commande : emoji')
                                                                                                            .addField('Description de la commande', "Vous voulez connaître plus d'information sur l'émoji ? Cette commande est faite pour.")
                                                                                                            .addField('Rappel', "Les caractères tels que [], {} ou <> ne doivent pas être utilisés lors de l'exécution de votre commande.")
                                                                                                            .addField('Utilisation', "`&emoji`")
                                                                                                            .setTimestamp(new Date)
                                                                                                            .setThumbnail(client.user.avatarURL)
                                                                                                            .setFooter(client.user.username, client.user.avatarURL)
                                                                                                        message.channel.send(tbembed)
                                                                                                        }
                                                                                                        else{
                                                                                                            if(args[0] === "date"){
                                                                                                                let tbembed = new Discord.RichEmbed()
                                                                                                                .setColor(embedcolor)
                                                                                                                .setTitle('Commande : date')
                                                                                                                .addField('Description de la commande', "Vous ne savez pas la date du jour ? Cette commande vous sera bien utile !.")
                                                                                                                .addField('Rappel', "Les caractères tels que [], {} ou <> ne doivent pas être utilisés lors de l'exécution de votre commande.")
                                                                                                                .addField('Utilisation', "`&date`")
                                                                                                                .setTimestamp(new Date)
                                                                                                                .setThumbnail(client.user.avatarURL)
                                                                                                                .setFooter(client.user.username, client.user.avatarURL)
                                                                                                            message.channel.send(tbembed)
                                                                                                            }
                                                                
                                                                                                            else{
                                                                                                                if(args[0] === "bienvenue"){
                                                                                                                    let tbembed = new Discord.RichEmbed()
                                                                                                                    .setColor(embedcolor)
                                                                                                                    .setTitle('Commande : bienvenue')
                                                                                                                    .addField('Description de la commande', "Souhaitez bienvenue avec cette commande devient plus facile.")
                                                                                                                    .addField('Rappel', "Les caractères tels que [], {} ou <> ne doivent pas être utilisés lors de l'exécution de votre commande.")
                                                                                                                    .addField('Utilisation', "`&bienvenue`")
                                                                                                                    .setTimestamp(new Date)
                                                                                                                    .setThumbnail(client.user.avatarURL)
                                                                                                                    .setFooter(client.user.username, client.user.avatarURL)
                                                                                                                message.channel.send(tbembed)
                                                                                                                }
                                                                                                            else{
                                                                                                                if(args[0] === "autisme"){
                                                                                                                    let tbembed = new Discord.RichEmbed()
                                                                                                                    .setColor(embedcolor)
                                                                                                                    .setTitle('Commande : autisme')
                                                                                                                    .addField('Description de la commande', "Quel est votre taux d'autisme ?")
                                                                                                                    .addField('Rappel', "Les caractères tels que [], {} ou <> ne doivent pas être utilisés lors de l'exécution de votre commande.")
                                                                                                                    .addField('Utilisation', "`&autisme`")
                                                                                                                    .setTimestamp(new Date)
                                                                                                                    .setThumbnail(client.user.avatarURL)
                                                                                                                    .setFooter(client.user.username, client.user.avatarURL)
                                                                                                                message.channel.send(tbembed)
                                                                                                                }
                                                                                                            else {
                                                                                                                if(args[0] === "8ball"){
                                                                                                                    let tbembed = new Discord.RichEmbed()
                                                                                                                    .setColor(embedcolor)
                                                                                                                    .setTitle('Commande : 8ball')
                                                                                                                    .addField('Description de la commande', "Pose lui une question il te répondra !")
                                                                                                                    .addField('Rappel', "Les caractères tels que [], {} ou <> ne doivent pas être utilisés lors de l'exécution de votre commande.")
                                                                                                                    .addField('Utilisation', "`&8ball`")
                                                                                                                    .setTimestamp(new Date)
                                                                                                                    .setThumbnail(client.user.avatarURL)
                                                                                                                    .setFooter(client.user.username, client.user.avatarURL)
                                                                                                                message.channel.send(tbembed)
                                                                                                                }
                                                                                                            else{
                                                                                                                if(args[0] === "channelinfo") {
                                                                                                                    let chanlembd = new Discord.RichEmbed()
                                                                                                                        .setColor(embedcolor)
                                                                                                                        .setTitle("Commande : channelinfo")
                                                                                                                        .addField("Description de la commande", "Affiche des informations sur le channel actuel ou un channel mentionné.")
                                                                                                                        .addField('Rappel', "Les caractères tels que [], {} ou <> ne doivent pas être utilisés lors de l'exécution de votre commande.")
                                                                                                                        .addField("Utilisation", "`&channelinfo`\n`&channelinfo {channel}`")
                                                                                                                        .setTimestamp(new Date)
                                                                                                                        .setThumbnail(client.user.avatarURL)
                                                                                                                        .setFooter(client.user.username, client.user.avatarURL)
                                                                                                                    message.channel.send(chanlembd)
                                                                                                            }
                                                                                                            
                                                                                                       
                                                                                               
                                                                                            
                                                                                            

                                                                                       
                                                                                    
                                                                                
                                                                             
                                    












                                                                                                            }}}}}}}}}}}}}}}}}}}}}}}}}
}                                                                                                                
}
exports.help = {
    name: "help",
    description: "Affiche le help"
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["h"]
}
