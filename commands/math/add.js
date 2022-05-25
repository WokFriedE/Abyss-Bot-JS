module.exports = {
    callback: (message, ...args) => {
        console.log(args);
        let sum = 0;
        for (let i = 0; i < args.length; i++) {
            sum += parseInt(args[i]);
        }

        message.reply("Sum is " + sum);
    }
}