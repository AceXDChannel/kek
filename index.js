const Discord = require("discord.js")
require("dotenv").config()

const TOKEN = "OTM3MTg4MjkyMjUwNjk3Nzg4.YfYGnA.HzUcVZxtKldLLfsl5Tu_6ujGIM4"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log('Bot Start!')
})

client.on("messageCreate", (message) => {
    if (message.content == "hi"){
        message.reply("please stop you failed several times already, just fucking give up")
    }
})

client.login(process.env.TOKEN)