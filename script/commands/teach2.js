module['exports']['config'] = {
    name: 'teach',
    version: '1.0.0',
    hasPermssion: 2,
    credits: 'JOSHUA SY',
    description: 'Teach Tom',
    commandCategory: 'Admin',
    usages: '[ask => ans]',
    cooldowns: 2
};
module['exports']['run'] = async function({
    api,
    event,
    args
}) {
    if (this['config']['credits'] != 'JOSHUA SY') {
        console['log']('[ WARNING ] » Change credited Fuck You By Chand sy :p  :) ' + global['config']['BOTNAME'] + ' credits modules "' + this['config']['name'] + '"');
        return api['sendMessage']('× [ WARNING ] × LOL CREDIT CHANGED FUCK YOUR SISTER BY CHAND 😹🖐🏻', event['threadID'], event['messageID'])
    };
    const axios = require('axios');
    let {
        messageID,
        threadID,
        senderID,
        body
    } = event;
    let tid = threadID,
        mid = messageID;
    const content = args['join'](' ')['split']('=>')['map']((item) => {
        return item = item['trim']()
    });
    let ask = content[0];
    let ans = content[1];
    if (!args[0]) {
        return api['sendMessage']('Use' + global['config']['PREFIX'] + this['config']['name'] + ' your ask => Tom respond', tid, mid)
    };
    const res = await axios['get'](`${'https://newapi2.faheem007.repl.co/sim?type=teach&ask='}${ask}${'&ans='}${ans}${''}`);
    api['sendMessage']('╔═══❖•💝° 🌝°•❖═══╗\n\nThank you for teaching Tom✅' + '\nYour ask 🥀 : ' + ask + '\nTom respond ❤️ : ' + ans + '\n\n╚═══❖•💝° 🌝°•❖═══╝', tid, mid)
}