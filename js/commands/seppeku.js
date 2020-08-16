const time = 60; //seconds  //TODO: fix big boss man says this is "janky"
exports.execute = (twitch, command, args, context, commands) => { 
    twitch.say(`/timeout ${context.username} ${time}`); }