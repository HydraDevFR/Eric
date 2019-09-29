exports.run = (client, message, args) => {
    if(message.author.id == '487698548935360513'){
    if(!args || args.size < 1) return message.reply("Veuillez spécifier une commande à reload.");
    const commandName = args[0];
    // Check if the command exists and is valid
    if(!client.commands.has(commandName)) {
      return message.reply("La commande n'existe pas.");
    }
    // the path is relative to the *current folder*, so just ./filename.js
    delete require.cache[require.resolve(`./${commandName}.js`)];
    // We also need to delete and reload the command from the client.commands Enmap
    client.commands.delete(commandName);
    const props = require(`./${commandName}.js`);
    client.commands.set(commandName, props);
    message.reply(`La commande ${commandName} a bien été reload.`);
    }else {
        message.channel.send("MDRRRRR t'as cru t'étais mon owner ?")
    }
  };
  exports.help = {
    name: "reload",
    description: "reload une commande"
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["reload"]
} 