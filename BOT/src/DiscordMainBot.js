const {Client, GatewayIntentBits, Collection} = require("discord.js");
const client = new Client({
    intents:[
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.Guilds,
        GatewayIntentBits.MessageContent
    ]
});
//Create Variable
const clientmessage = require("./createmessage")
const slashcommand = require("./slashcommand")
const auth = require('./auth.json');
const cli = require("./ClientID.json");
const { REST, Routes } = require('discord.js');
const CLIENT_ID = cli.ClientID;
const rest = new REST({ version: '10' }).setToken(auth.token);
const { SlashCommandBuilder } = require('@discordjs/builders');

//check 
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

//call module
slashcommand(client);
clientmessage(client);
module.exports = client;
client.login(auth.token);


