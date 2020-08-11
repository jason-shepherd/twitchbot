module.exports = (message, prefix) => {
    let command = "";
    let args = [];

    message = message.replace(prefix, "").toLowerCase();
    args = message.split(" ");
    command = args.shift();
    return {
        command: command,
        args: args
    }
}
