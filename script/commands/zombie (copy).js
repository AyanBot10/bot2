module.exports.config = {
	name: "neonexpensive",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "The_Faheem",
	description: "Image",
	commandCategory: "Text Maker",
	usages: "",
	cooldowns: 5
};
module.exports.run = async ({ event,
    api,
    global,
    Config,
    logger,
    Threads,
    Users,
    args,
    body,
    is }) => {
  try {
        const axios = require("axios");
        const request = require("request");
        const fs = require("fs-extra");
        var ag = args.join(" ").split(' | ');
        var text1 = ag[0],
            text2 = ag[1],
            text3 = ag[2];
    let imag = (await axios.get(`https://faheem-vip-010.faheem001.repl.co/api/ephoto/neonexpensive?text=${text1}&text2=${text2}&text3=${encodeURI(text3)}`, {
        responseType: "stream"
      })).data;
    var msg = { body: 'YOUR AVATAR HERE',
attachment: imag 
}
    return api.sendMessage(msg, event.threadID, event.messageID)
  } catch (e){
    api.sendMessage('Error Now', event.threadID, event.messageID)
  }
                                                                                                                                       }