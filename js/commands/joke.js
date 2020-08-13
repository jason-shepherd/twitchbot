const request = require("request");
//TODO: Possibly add args to the command
//TODO: Add line breaks
//TODO: make it work
//Sometimes just doesnt work
exports.execute = (twitch, command, args, context, commands) => {
    //url for api
  var jokeapi =
    "https://sv443.net/jokeapi/v2/joke/Programming,Miscellaneous,Pun?blacklistFlags=nsfw,religious,political,racist,sexist";
    //request the webpage
  request(jokeapi, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      //get data
      var data = JSON.parse(body); console.log(body);

      //<--start setup joke-->
      //set up variables for joke; each joke is seperated into two variables
      var setup = ""; var delivery = "";
      
      //check if values are undefined and if they are define them 
        setup = data.setup;
        delivery = data.delivery;

      //<--end setup joke-->

      //tell the joke in twitch chat
      if(setup == undefined || data == undefined) {
          twitch.say('error');
      } else {  twitch.say(`${setup} ${delivery}`);}
      

    } else {
        //an error has occured
      console.log(error); twitch.say(`an error has occured when attempting to get a joke :(`);
    }
  });
};
