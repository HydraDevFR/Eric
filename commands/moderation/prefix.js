exports.run = (client, message, args) => {
  
	if (!client.prefixes.has(message.guild.id)) {
		client.prefixes.set(message.guild.id, `&`);
	};
	let curpref = client.prefixes.get(message.guild.id);
	if (!args[0]) return message.channel.send(`Mon préfix sur ce serveur est ${curpref} !\nPour le modifier, effectuez \`${curpref}prefix {votre prefix}\``);
	if (!message.member.hasPermission(`ADMINISTRATOR`)) return message.channel.send(`Vous avez besoin de la permssion \`ADMINISTRATOR\` pour changer le préfix !`)
	let newprefix = args.join(" ");

	client.prefixes.set(message.guild.id, newprefix);
	message.channel.send(`Le prefix a été changé sur : \`${newprefix}\``);
};

exports.conf = {
	enabled: true,
	guildOnly: true,
	aliases: [`pref`, `newprefix`, `setprefix`],
};

exports.help = {
	name: `prefix`
};