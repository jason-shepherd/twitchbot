//TODO: Possibly add args to the command

//request module used to get jokes from jokeapi
const request = require("request");

//jokeapi url
const jokeapi = "https://sv443.net/jokeapi/v2/joke/Programming,Miscellaneous,Pun?blacklistFlags=nsfw,religious,political,racist,sexist";
const options = {json: true};

exports.execute = (twitch, command, args, context, commands) => {
    request(jokeapi, options, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            let joke = "";
            //Some jokes are formatted differently, so we check which format it's using
            if(body.joke === undefined)
                joke = `${body.setup} ${body.delivery}`
            else
                joke = body.joke;
            twitch.say(joke);
        } else {
            console.log(error); twitch.say(`An error has occured when attempting to get a joke :(. Please try again later.`);
        }
    });
};
