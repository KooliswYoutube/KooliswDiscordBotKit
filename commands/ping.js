const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  
  const start = Date.now()
message.channel.send("Pinging...").then(message => {

const end = Date.now()
message.edit(`網路延遲: **${(end - start)}**ms!`)
})
}
