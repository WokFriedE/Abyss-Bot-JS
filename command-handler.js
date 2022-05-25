const Client = require('discord.js').Client;
const fs = require('fs');
const getFiles = require('./get-files');

module.exports = (client) => {
    const commands = {}

    const SUFFIX = 'js';
    const PREFIX = '-';

    const commandFiles = getFiles('./commands', SUFFIX);
    console.log(commandFiles);

    for (const command of commandFiles) {
        let commandFile = require(command);
        if (commandFile.default) commandFile = commandFile.default

        const split = command.replace(/\\/g, '/').split('/');
        const commandName = split[split.length - 1].replace(`.${SUFFIX}`, '');

        commands[commandName.toLowerCase()] = commandFile;
    }

    console.log(commands);

    client.on('messageCreate', (message) => {
        if (message.author.bot || !message.content.startsWith(PREFIX)) return;

        const args = message.content.slice(1).split(/ +/);
        const commandName = args.shift().toLowerCase(); //removes first item in list 

        if (!commands[commandName]) return;

        try {
            commands[commandName].callback(message, ...args)
        } catch (e) {
            console.error(e);
        }
    });
}