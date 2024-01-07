module['exports']['config'] = {
    name: 'coupledp',
    version: '1.0.0',
    hasPermssion: 0,
    credits: 'MR CHAND',
    description: 'couple dp',
    commandCategory: 'Other',
    cooldowns: 2
};
module['exports']['run'] = async function({
    api,
    event,
    args
}) {
    if (this['config']['credits'] != 'MR CHAND') {
        console['log']('[ WARNING ] » Change credited By FAHEEM :p  :) ' + global['config']['BOTNAME'] + ' credits modules "' + this['config']['name'] + '"');
        return api['sendMessage']('× [ WARNING ] × LOL CREDIT CHANGED By FAHEEM  😹🖐🏻', event['threadID'], event['messageID'])
    };
    const axios = require('axios');
    const request = require('request');
    const fs = require('fs-extra');
    const res = await axios['get'](`${'https://tanjiro-api.onrender.com/cdp?api_key=tanjiro'}`);
    var msg2 = res['data']['result'];
    var msg = [];
    let img1 = `${''}${res['data']['male']}${''}`;
    let img2 = `${''}${res['data']['female']}${''}`;
    let imgs1 = (await axios['get'](`${''}${img1}${''}`, {
        responseType: 'arraybuffer'
    }))['data'];
    fs['writeFileSync'](__dirname + '/cache/img1.png', Buffer['from'](imgs1, 'utf-8'));
    let imgs2 = (await axios['get'](`${''}${img2}${''}`, {
        responseType: 'arraybuffer'
    }))['data'];
    fs['writeFileSync'](__dirname + '/cache/img2.png', Buffer['from'](imgs2, 'utf-8'));
    var allimage = [];
    allimage['push'](fs['createReadStream'](__dirname + '/cache/img1.png'));
    allimage['push'](fs['createReadStream'](__dirname + '/cache/img2.png')); {
        msg += `${''}${msg2}${''}`
    }
    return api['sendMessage']({
        body: msg,
        attachment: allimage
    }, event['threadID'], event['messageID'])
}