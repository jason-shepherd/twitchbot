const fs = require("fs");
const path = require("path");

var commands = {};
fs.readdirSync("./js/commands").forEach(file => {
    if(path.extname(file) === ".js" && file !== "commands.js") {
        commands[file.slice(0, -3).toLowerCase()] = require("./" + file);
    }
});

exports.executeCommand = (command, client, target) => {
    console.log(command);
    commands[command](client, target);
}

exports.commands = commands;
