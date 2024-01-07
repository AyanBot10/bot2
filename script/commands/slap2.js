const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "slap2",
  version: "30.0.10",
  hasPermssion: 0,
  credits: "Dark Rulex Team",
  description: "slap the user tagged",
  commandCategory: "general",
  usages: "slap [Tag someone you need to slap]",
  cooldowns: 5,
};


module.exports.run = async ({ api, event, args }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
    var out = (msg) => api.sendMessage(msg, event.threadID, event.messageID);
  if (!args.join("")) return out("Please tag someone");
  else
  return axios.get('https://dark-rulex-vip.0xanupx0.repl.co/slap2').then(res => {
        let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);
        var mention = Object.keys(event.mentions)[0];
                  let tag = event.mentions[mention].replace("@", "");    
        
 let callback = function () {
            api.setMessageReaction("✅", event.messageID, (err) => {}, true);
        api.sendMessage({
						        body: "slapped you  " + tag + "☺️\n\naww sorry I thought that there was a mosquito ~",
                                          mentions: [{
          tag: tag,
          id: Object.keys(event.mentions)[0]
        }],
						attachment: fs.createReadStream(__dirname + `/cache/hug.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/hug.${ext}`), event.messageID)
				};
 //   }
        request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/hug.${ext}`)).on("close", callback);
			})
    .catch(err => {
                     api.sendMessage("Failed to generate gif, be sure that you've tag someone!", event.threadID, event.messageID);
    api.setMessageReaction("☹️", event.messageID, (err) => {}, true);
                  })     
}