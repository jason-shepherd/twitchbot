module.exports = (message, prefix) => {
    let command = "";
    let args = [];
    
    message = message.toLowerCase();
    args = message.split(" ");
    command = args.shift();
    return {
        command: command,
        args: args
    }
}
