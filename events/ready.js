exports.run = (client) => {
  console.log(`OMG COUCOU`);
  client.user.setActivity(`&help | ${client.users.size} utilisateurs | ${client.guilds.size} serveur`, {type: "LISTENING"});
  /*client.user.setActivity(` &help | ${client.users.size} utilisateurs | ${client.guilds.size} serveur`, {type: "LISTENING"});*/
  client.user.setStatus("dnd");
} 