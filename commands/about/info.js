const Discord = require("discord.js");
const os = require("os-utils");
const moment = require('moment')
moment.locale('fr');

function conva(ms) {
    var d, h, m, s;
    s = Math.floor(ms / 1000);
    m = Math.floor(s / 60);
    s = s % 60;
    h = Math.floor(m / 60);
    m = m % 60;
    d = Math.floor(h / 24);
    h = h % 24;
    if (d > 0) {
        return d + " jours"
    }
    if (h > 0) {
        return h + " heures"
    }
    if (m > 0) {
        return m + " minutes"
    }
    else {
        return s + " secondes"
    }
};
const status = {
    online: "#43b581",
    idle: "#faa61a",
    dnd: "#f04747",
    offline: "#747f8d"
};




exports.run = (client, message) => {
    os.cpuUsage(function(v){
        let u = conva(client.uptime);
        let dat = moment(client.user.createdAt).format('dddd Do MMMM YYYY, HH:mm:ss')
        var date = dat.substring(0, 1).toLocaleUpperCase() + dat.substring(1);;
        var cpu = v.toFixed(3)
        let embed = new Discord.RichEmbed()
            .setDescription("**Qui suis-je ?**")
            .setTimestamp()
            .addField("Développeur", "KhoEn/LBGTEAM", true)
            .addField("Créé", date, true)
            .addField("—— Stats ——", `\`\`\`http\nServ.    ::  ${client.guilds.size}\nCanaux   ::  ${client.channels.size}\nUtilis.  ::  ${client.users.size}\nEmojis   ::  ${client.emojis.size}\n\`\`\``, true)
            .addField("—— Usage ——", `\`\`\`http\nCPU      ::  ${cpu}%\nMémoire  ::  ${Math.round(process.memoryUsage().rss / 1024 / 1024)} MB\nPing     ::  ${parseInt(client.ping)} ms\nUptime   ::  ${u}\`\`\``, true)
            .addField("—— Environment ——", `\`\`\`http\nNode.js  ::  v9.4.0\nOS       ::  Win. 10 ×64\nModule   ::  Discord.js\nVersion  ::  1.3.2-master\`\`\``, true)
            .setThumbnail('https://cdn.discordapp.com/avatars/296281924773740554/75d5f66acfc5ab3b18297e1f6e515dcf.png?size=2048')
            .setColor(status[client.user.presence.status])
            .setFooter("LBG by KhoEn", "https://cdn.discordapp.com/avatars/296281924773740554/75d5f66acfc5ab3b18297e1f6e515dcf.png?size=2048")
            .setTimestamp();
    
        message.channel.send(embed)    
   });
}
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["info"],
};

exports.help = {
    name: "stats",
    description: "Montrer l'état du bot.",
    usage: "stats"
};