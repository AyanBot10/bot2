const fs = require("fs");
module.exports.config = {
	name: "love you",
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
	if(react.includes("Love") ||
     react.includes("I love") || react.includes("lOve") || react.includes("LoVe") ||
react.includes("love") ||
react.includes("Love")) {
		var msg = {
				body: `𝗟𝗼𝘃𝗲 𝗬𝗼𝘂 𝗧𝗼𝗼 𝗠𝗲𝗿𝗶 𝗝𝗮𝗮𝗻 ❤️🥰`,attachment: fs.createReadStream(__dirname + `/noprefix/Lv.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("💔", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }