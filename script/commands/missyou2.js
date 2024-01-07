const fs = require("fs");
module.exports.config = {
	name: "Miss you",
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
     react.includes("I miss") || react.includes("miSS") || react.includes("miSs") ||
react.includes("miss") ||
react.includes("Miss")) {
		var msg = {
				body: `𝗠𝗶𝘀𝘀 𝗬𝗼𝘂 𝗧𝗼𝗼 𝗠𝗲𝗿𝗶 𝗝𝗮𝗮𝗻 ${name} ❤️🥰`,attachment: fs.createReadStream(__dirname + `/noprefix/amir.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("💔", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }