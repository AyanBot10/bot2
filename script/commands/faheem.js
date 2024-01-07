const fs = require("fs");
module.exports.config = {
	name: "Faheem",
    version: "1.1.1",
	hasPermssion: 0,
	credits: "Muhammad Ali", 
	description: "Just Respond",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("Miss") ||
     react.includes("I miss") || react.includes("Faheem") || react.includes("Owner") ||
react.includes("faheem") ||
react.includes("admin")) {
		var msg = {
				body: `Owner Faheem Here 𝗠𝗲𝗿𝗶 𝗝𝗮𝗮𝗻 ${name} ❤️`,attachment: fs.createReadStream(__dirname + `/noprefix/amir.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("💔", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }