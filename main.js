const { Client, Intents } = require('discord.js')
const client = new Client({ intents: Object.keys(Intents.FLAGS) })

const TOKEN = "token"


client.login(TOKEN)