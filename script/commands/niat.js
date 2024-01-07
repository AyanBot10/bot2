module.exports.config = {
	name: "niat",
  version: "30.0.10",
	hasPermssion: 0,
  credits: "Dark Rulex Team",// Don't Change Credit
	description: "Niat Salat ( Islamic )",
	commandCategory: "islamic",
	usages: "",
  cooldowns: 1, 
}
module.exports.run = async function({api, event, args, utils, Users, Threads}) {
    try {
        let axios = require('axios');
        let fs = require("fs-extra");
        let request = require("request");
        let {threadID, senderID, messageID} = event;
    const res = await axios.get(`https://dark-rulex-vip2.0xanupx0.repl.co/islami/niatshalat`);
    console.log(res.data);
	  var data = res.data;
      return api.sendMessage(`Number :${data.result.id}\n\nName : ${data.result.name}\n\nArabic :${data.result.arabic}\n\nUrdu : ${data.result.urdu}\n\nEnglish :${data.result.english}\n\n\nCreator : ${data.creator}`, event.threadID, event.messageID)
      
		} catch (err) {
        return console.log(`[ERR]: ${err}`)
    }
}