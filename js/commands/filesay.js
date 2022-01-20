exports.helpText = "Say text from pastebin link";
const request = require("request");

exports.execute = (twitch, command, context, commands) => {
    const sendmsg = async (lines) => {
        for (const line of lines) {
            await new Promise(r => setTimeout(r, 2500));
            twitch.say(line);
        }
    }
    //probably should allow url as well
    request(`https://pastebin.com/raw/${command.args[0]}`, (error, response, body) => {
        if (!body.error && response.statusCode == 200) {
            var lines = body.split(/\r?\n/);
            sendmsg(lines);

        } else {
            return "failed_api";
        }
    });


    return true;


}

