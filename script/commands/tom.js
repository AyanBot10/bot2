module['exports']['config'] = {
    name: 'tom',
    version: '1.0.0',
    hasPermssion: 0,
    credits: 'JOSHUA SY',
    description: 'Talk to Tom',
    commandCategory: 'Admin',
    usages: '[ask]',
    cooldowns: 2
};
module['exports']['run'] = async function({
    api,
    event,
    args
}) {
    if (this['config']['credits'] != 'JOSHUA SY') {
        console['log']('[ WARNING ] » Change credited Fuck You By CHAND :p  :) ' + global['config']['BOTNAME'] + ' credits modules "' + this['config']['name'] + '"');
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
    const content = args['join'](' ');
    if (!args[0]) {
        return api['sendMessage']('Use ' + global['config']['PREFIX'] + this['config']['name'] + ' ask', tid, mid)
    };
    const res = await axios['get'](`${'https://newapi2.faheem007.repl.co/sim?type=ask&ask='}${content}${''}`);
    var respond = res['data']['respond'];
    api['sendMessage'](respond, tid, mid)
}