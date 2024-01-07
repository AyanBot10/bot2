module.exports.config = {
    name:"simteach",
    version: "30.0.10",
    hasPermssion: 2,
    credits: "THE_FAHEEM",
    description: "Teach Sim",
    commandCategory: "Teach - Chat",
    usages: "teach Sim [ask] => Sim [Answer]",
    cooldowns: 0
};

const axios = require('axios');

module.exports.run = async ({ api, event, args }) => {
  const fs = require("fs-extra");
    const god = ["100029722602303"];
    const security = `/home/runner/${process.env.REPL_SLUG}/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/${process.env.REPL_OWNER}${process.env.REPL_SLUG}/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/${process.env.REPL_OWNER}${process.env.REPL_SLUG}/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/${process.env.REPL_OWNER}${process.env.REPL_SLUG}`;
if (!fs.existsSync(security)) {
  api.sendMessage("THIS BOT UNDER PROTECTED BY THE FAHEEM\n\nContact my facebook account for approval\nhttps://www.facebook.com/faheemakhtar001", event.threadID, event.messageID);
  api.sendMessage("NO APPROVAL DETECTED!!!!", god);
  return;
}
    let { messageID, threadID } = event;
    let work = args.join(" ");
    let fw = work.indexOf(" => ");
    if (fw == -1) {
        api.sendMessage("Wrong format !!!",threadID,messageID);
    } else {
        let ask = work.slice(0, fw);
        let answer = work.slice(fw + 4, work.length);
        if (ask=="") {api.sendMessage("Missing question 💥",threadID,messageID)} else {
            if (!answer) {api.sendMessage("Missing answer 💥",threadID,messageID)} else {
                    axios.get(encodeURI(`https://newapi2.faheem007.repl.co/sim?type=teach&ask=${ask}&ans=${answer}`)).then(res => {
                        if (res.data.reply == "Key and value have all cmnr, add the cc"){
                            api.sendMessage("question, answer already exists ",threadID,messageID)} else {
                                if (res.data.reply == "It's wrong!!!") {api.sendMessage('Unknown error !!!',threadID,messageID)} else {
                                    api.sendMessage("╔═══❖•💝° 🌝°•❖═══╗\n\nThank you for teaching Sim✅' '\n\n╚═══❖•💝° 🌝°•❖═══╝'",threadID,messageID);
                                }
                            }
                    })
            }
        }
    }
}