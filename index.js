const config = require("./config.json")
const tmi = require("tmi.js");

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
    client.say(target, "Hello, World!");
});

client.on('connection', (addr, port) => {
    console.log(`Connected to {addr} on port {port}!`);
});

client.connect();
