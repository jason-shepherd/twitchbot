exports.execute = (twitch, command, args, context, commands) => {
    console.log("joke yes");
    
    var j = "https://sv443.net/jokeapi/v2/joke/Programming,Miscellaneous,Pun?blacklistFlags=nsfw,religious,political,racist,sexist";
    var request = require('request');
    request(j, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var data = JSON.parse(body)
            console.log(body);
            var setup = data.setup; var delivery = data.delivery
            console.log(setup);  console.log(delivery);
            var r = setup + "  " + delivery;
            twitch.say(r);
            console.log(r);
        } else { console.log(error); }
    })
}
//you touch this thing once and it break idk why 
//TODO: clean up and make it function not bad yes