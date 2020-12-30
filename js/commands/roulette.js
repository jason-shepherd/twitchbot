const time = 60;

exports.helpText = `Play Russian Roulette. If you're unlucky, you'll be timed out for ${time} seconds.`;

exports.execute = (twitch, command, context) => {
    if(Math.floor(Math.random() * 5 + 1) == 1)
        twitch.timeout(context.username, time, "Unlucky.").then((data) => {
            twitch.say(`${context.username} was unlucky.`);
        }).catch((err) => {twitch.say(err)});
    else
        twitch.say(`${context.username} lives to die another day.`);
}
