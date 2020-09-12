const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
   message.reply("hi")
   message.member.send("dm")
}
