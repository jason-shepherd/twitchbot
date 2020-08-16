const tmi = require("tmi.js");

module.exports = (config) => {
    var opts = {
        options: {
            debug: true
        },
        connection: {
            reconnect: true
        },
        identity: {
            username: config.username,
            password: config.password
        },
        channels: [config.channel]
    }
    
    client = new tmi.client(opts);
    client.connect();

    return {
        onmessage: client.on.bind(client, 'message'),
        say: client.say.bind(client, config.channel),
        timeout: client.timeout.bind(client, config.channel)
    }
}
