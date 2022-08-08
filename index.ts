import DiscordJS, { GatewayIntentBits, IntentsBitField, Message } from 'discord.js';
import dotenv from 'dotenv';
dotenv.config();

const client = new DiscordJS.Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.on('ready', (client) => {
    console.log(`The bot has logged in as ${client.user.tag}.`)
});

client.on('messageCreate', (message) => { 
    if(message.content == 'ping') {
        message.reply({
            content: '🏓 Pong!'
        });
    }
});

client.login(process.env.DISCORD_TOKEN)