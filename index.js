const config = require("./config.json");
const tmi = require("tmi.js");
const commands = require("./js/commands/commands.js");

const ops = {
    options: {
        debug: true
    },
    connection: {
        reconnect: true
    },
    identity: {
        username: config.username,
        password: config.password,
    },
    channels: [config.channel]
}

const client = new tmi.client(ops)

client.on('message', (target, context, msg, self) => {
    if(self) return;
    msg = msg.toLowerCase()
    console.log(commands.commands);
    if(msg[0] == "!") {
        parsed = msg.split(" ")[0];
        parsed = parsed.replace('!', '');
        console.log(parsed);
        commands.executeCommand(parsed, client, target);
    }
});

client.on('connection', (addr, port) => {
    console.log(`Connected to {addr} on port {port}!`);
});

client.connect();
