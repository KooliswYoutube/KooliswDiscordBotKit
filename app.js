const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
client.login(process.env.TOKEN);
client.config = config;


client.on("ready", () => {
  console.log("The bot has started!");
  // 機器人狀態
  // 玩 -PLAYING
  // 聽 - LISTENING
  // 看 - WATCHING
  client.user.setActivity(`RealKoolisw`, { type: "WATCHING" });

  
  console.log("Ready!");
});

// welcome
client.on("message", async message => {
  // command handler
  if (!message.content.startsWith(config.prefix)) return;

  if (message.author.bot) return undefined;
  if (!message.content.startsWith(config.prefix)) return undefined;

  let command = message.content.toLowerCase().split(" ")[0];
  command = command.slice(config.prefix.length);
  let args = message.content
    .slice(config.prefix.length)
    .trim()
    .split(" ");
  let cmd = args.shift().toLowerCase();

  try {
    let commandFile = require(`./commands/${cmd}.js`);
    commandFile.run(client, message, args);
  } catch (e) {
    console.log(e.message);
  } finally {
    console.log(`${message.author.username} using command ${cmd}`);
  }
    
    
    
   
    
    
    

  

});
