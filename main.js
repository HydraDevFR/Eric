const Discord = require(`discord.js`);
const client = new Discord.Client({ fetchAllMembers: true });
const config = require(`./config.json`);
const fs = require(`fs`);

//Ici, le module de base de données !!
const Enmap = require(`enmap`);

//On crée une table pour les profiles et une table pour les bans ! (On les rattache au client pour qu'ils soient accessibles de partout !)

client.prefixes = new Enmap({ name: `prefixes` });

// First, this must be at the top level of your code, **NOT** in any event!
const talkedRecently = new Set();
// Inside your message event, this code will stop any command during cooldown.
// Should be placed after your code that checks for bots & prefix, for best performance
 


//Ici grâce au FS (FileSystem) on demande à notre code que lorsqu'un event advient, qu'il fouille dans le dossier "events" et qu'il ouvre le fichier qui a un nom correspondant !
fs.readdir(`./events/`, (e, files) => {
	if (e) return console.error(e);
	files.forEach(file => {
		let eF = require(`./events/${file}`);
		let eN = file.split(`.`)[0];
		client.on(eN, (...args) => eF.run(client, ...args));
	});
});

/*C'est à l'aide de ces deux collections Discord que nous allons pouvoir "charger" nos commandes
(s'assurer quà première vue elles ne contiennent pas d'erreur) et ensuite les reload, les run !*/
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.modules = [];

//Pareil qu'en haut sauf que là c'est le tour des commandes !
fs.readdir(`./commands/`, (e, folders) => {
	//On sait jamais si on a pas le droit d'ouvrir le dossier commands :
	if (e) console.error(e);
	//Ici on regarde combien de modules existent, c.à.d combien y'a-t-il de sous-dossiers
	console.log((`${folders.length} modules disponibles.`));
	//Alors là on va ouvrir chaque dossiers !
	folders.forEach(folder => {
		client.modules.push(folder);
		fs.readdir(`./commands/${folder}`, (e, files) => {
			if (e) console.error(e);
			//Et là hophophop ! Voici le nombres de files qu'il y a dans le modules !
			console.log((`\n${files.length} commandes ${folder}.`));
			//Alors maintenant on va ouvrir chaque fichier !
			files.forEach(file => {
				if (file === `module.js`) return
				let props = require(`./commands/${folder}/${file}`);
				//Si on arrive là : Pas d'erreur ! C'est fantastique !
				console.log(`   ${props.help.name} chargé.`);
				//Et on ajoute notre petite commande dans notre collection !
				client.commands.set(props.help.name, props);
				//alors là on va aller fouiller dans chaque exports.conf de nos commandes pour faire une collection des alias !
				props.conf.aliases.forEach(alias => {
					client.aliases.set(alias, props.help.name);
				});
			});
		});
	});
});

//Si UN JOUR on rencontre un erreur :
client.on(`error`, console.error);
//On même un simple avertissement :
client.on(`warn`, console.warn);

//Très utile (sinon le bot va pas se connecter sur son compte Discord quoi xD)
client.login(config.token);

//Juste pour faire 100 lignes ;)