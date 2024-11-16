// Livrarias
const Discord = require("discord.js");
const path = require('path')
const ms = require('moment')
const { CommandHandler } = require('djs-commander');
const configs = require('./modules/storage/configurations.js')

// DJS 
const client = new Discord.Client({
    intents: [
        Discord.GatewayIntentBits.Guilds,
        Discord.GatewayIntentBits.GuildScheduledEvents,
        Discord.GatewayIntentBits.GuildMessageTyping,
        Discord.GatewayIntentBits.GuildMessages,
        Discord.GatewayIntentBits.DirectMessages,
        Discord.GatewayIntentBits.DirectMessageReactions,
        Discord.GatewayIntentBits.DirectMessageTyping,
        Discord.GatewayIntentBits.MessageContent,
        Discord.GatewayIntentBits.GuildVoiceStates,
        Discord.GatewayIntentBits.GuildPresences,
        Discord.GatewayIntentBits.GuildMembers
    ]
});
module.exports = client

new CommandHandler({
    client,
    eventsPath: path.join(__dirname, './modules/events'),
    commandsPath: path.join(__dirname, './modules/commands')
});

client.login(`${configs.bot_informations.token}`).then((bot) => {
    const time = ms().locale('pt-br').format('LL');
    console.log('[' + time + '] BOT Online.')
}).catch((err) => {
    console.log('[ERRO DEPENDÊNCIA]: O TOKEN está inválido! Vá no diretório de configurations em módulos e mude o arquivo configsBOT.json, adicione o TOKEN no bot_token!\n\
    [AVISO DEPENDÊNCIA]: Lembre-se de ativar os privilégios no portal do desenvolvedor no momento que criar o BOT!!');
})