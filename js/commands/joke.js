const parser = require("../parseVariable");
//request module used to get jokes from jokeapi
const request = require("request");
const options = {json: true};

//jokeapi url
const jokeapi = "https://sv443.net/jokeapi/v2/joke/{{catagories}}?blacklistFlags=nsfw,racist";
let catagories = "Programming,Miscellaneous,Pun";

exports.helpText = "Lemme tell you a funny joke! Do !joke <catagory> to specify a catagory. The valid catagories are " + catagories;

exports.execute = (twitch, command, context, commands) => {
   if(command.args.length)
      catagories = command.args;  
   request(parser(jokeapi, {catagories: catagories}), options, (error, response, body) => {
       if (!body.error && response.statusCode == 200) {
           let joke = "";
           //Some jokes are formatted differently, so we check which format it's using
           if(body.joke === undefined)
               joke = `${body.setup} ${body.delivery}`
           else
               joke = body.joke;
           twitch.say(joke);
       } else {
           return "failed_api";
       }
   });
    return true;
};
