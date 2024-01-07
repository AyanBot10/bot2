module.exports.config = {
    name:"teach2",
    version: "30.0.10",
    hasPermssion: 1,
    credits: "Dark Rulex Team",
    description: "Teach Amy",
    commandCategory: "Teach - Chat",
    usages: "teach Amy [ask] => Amy [Answer]",
    cooldowns: 0
};

const axios = require('axios');

module.exports.run = async ({ api, event, args }) => {
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
                    axios.get(encodeURI(`https://dark-rulex-vip.0xanupx0.repl.co/amy/add/${ask}&&${answer}`)).then(res => {
                        if (res.data.reply == "Key and value have all cmnr, add the cc"){
                            api.sendMessage("question, answer already exists ",threadID,messageID)} else {
                                if (res.data.reply == "It's wrong!!!") {api.sendMessage('Unknown error !!!',threadID,messageID)} else {
                                    api.sendMessage("Teaching success!",threadID,messageID);
                                }
                            }
                    })
            }
        }
    }
}