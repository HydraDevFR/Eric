const Discord = require("discord.js")
const client = new Discord.Client({ fetchAllMembers: true });
const talkedRecently = new Set();
exports.run = (client, message, args) =>{

    if (talkedRecently.has(message.author.id))
    return message.channel.send("Vous pouvez utiliser cette commanque que toutes les 10 secondes");
   
  // Adds the user to the set so that they can't talk for 2.5 seconds
  talkedRecently.add(message.author.id);
  setTimeout(() => {
    // Removes the user from the set after 2.5 seconds
    talkedRecently.delete(message.author.id);
  }, 10000); 
  

message.channel.send("cc")
}

exports.conf = {
	enabled: true,
	guildOnly: true,
	aliases: [`test`],
};

exports.help = {
	name: `test`
};