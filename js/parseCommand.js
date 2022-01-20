module.exports = (message, prefix) => {
    let command = "";
    let args = [];
    
    args = message.split(" ");
    command = args.shift();
    return {
        command: command,
        args: args
    }
}
