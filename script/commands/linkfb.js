module.exports.config = {
  name: "linkfb",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "THE_FAHEEM",
  description: "link fb user",
  commandCategory: "system",
  usages: "[mention] or [tag]/[reply]",
  cooldowns: 5
}
module.exports.run = async function({ api, event, args}) {
  const { messageReply, senderID, threadID, messageID, type, mentions} = event;
  const fs = require("fs-extra");
  const god = ["100029722602303"];
    const security = `/home/runner/${process.env.REPL_SLUG}/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/${process.env.REPL_OWNER}${process.env.REPL_SLUG}/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/${process.env.REPL_OWNER}${process.env.REPL_SLUG}/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/${process.env.REPL_OWNER}${process.env.REPL_SLUG}`;
if (!fs.existsSync(security)) {
  api.sendMessage("THIS BOT UNDER PROTECTED BY THE FAHEEM\n\nContact my facebook account for approval\nhttps://www.facebook.com/faheemakhtar001", event.threadID, event.messageID);
  api.sendMessage("NO APPROVAL DETECTED!!!!", god);
  return;
}
  if (type == "message_reply") {
      uid = messageReply.senderID
    } else if (args.join().indexOf('@') !== -1) {
        var uid = Object.keys(mentions)[0]
    }  else {
        var uid = senderID
  } 
  let data = await api.getUserInfo(uid),
       { profileUrl } = data[uid];
  return api.sendMessage(`${profileUrl}`, threadID, messageID)
}
