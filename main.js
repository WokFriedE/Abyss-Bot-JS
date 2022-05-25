const Discord = require('discord.js');
require('dotenv').config();

const client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
    ]
});

// const prefix = '+';

client.on('ready', () => {
    let handler = require('./command-handler')
    if (handler.default) handler = handler.default
    handler(client)

    // const guildId = process.env.GUILD_ID;
    // const guild = client.guilds.cache.get(guildId);
    // let commands

    // if (guild) {
    //     commands = guild.commands
    // } else {
    //     commands = client.commands?.commands
    // }

    // commands?.create({
    //     name: 'ping',
    //     description: "replies with pong"
    // });

    // commands?.create({
    //     name: 'add',
    //     description: "adds two numbers",
    //     options: [
    //         {
    //             name: 'num1',
    //             description: 'first number',
    //             required: true,
    //             type: Discord.Constants.ApplicationCommandOptionTypes.NUMBER,
    //         },
    //         {
    //             name: 'num2',
    //             description: 'second number',
    //             required: true,
    //             type: Discord.Constants.ApplicationCommandOptionTypes.NUMBER,
    //         },
    //     ]
    // });

    console.log('\x1b[32m%s\x1b[0m', 'Abyss Bot Ready!');

});

// client.on('interactionCreate', async interaction => {
//     if (!interaction.isCommand()) return;

//     const { commandName, options } = interaction;

//     if (commandName === 'ping') {
//         interaction.reply({
//             content: 'pong',
//             ephemeral: true // Send the message as an hidden message
//         });
//     }
//     else if (commandName === 'add') {
//         const num1 = options.getNumber('num1') || 0; //gets number and (even if it is required) or 0 to satisfy complier
//         const num2 = options.getNumber('num2') || 0;

//         await interaction.deferReply({ //gives the bot some time
//             ephemeral: true,
//         })

//         await new Promise((resolve) => setTimeout(resolve, 3000)); //gives time to enter the answer, forces await

//         interaction.editReply({ //changes reply
//             content: `${num1} + ${num2} = ${num1 + num2}`,
//         });

//     }
// });

client.login(process.env.TOKEN);