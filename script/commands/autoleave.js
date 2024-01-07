/*
* Author: DC-Nam
* Có lỗi liên hệ fb https://www.facebook.com/levy.nam.2k5
*/


module.exports.onLoad = function() {
    if (!global.cmds_autoleave) global.cmds_autoleave = {};
};
module.exports.config = {
    name: 'autoleave',
    version: '1.1.1',
    hasPermssion: 2,
    credits: 'DC-Nam',
    description: 'Tự rời nhóm khi nhóm có số thành viên nhỏ hơn số mà bạn đặt.',
    commandCategory: 'Dành Cho Admin',
    usages: '[...|number]',
    cooldowns: 0
};
module.exports.run = function({
    api, event
}) {
    const {
        threadID: tid,
        messageID: mid,
        senderID: sid,
        isGroup,
        args
    } = event;
    const {
        sendMessage: send,
        removeUserFromGroup: rm,
        getCurrentUserID: botID
    } = api;
    if (!isGroup) return;
    const mdl = global.cmds_autoleave;
    if (isFinite(args[1])) {
        mdl.num = +args[1];
        send(`Đã thiết lập tự rời nhóm dưới ${mdl.num} thành viên`, tid, mid);
    } else if (!mdl.num) return send(`Chưa thiết lập điều kiện tự rời nhóm`, tid, mid); else {
        mdl.status = !mdl.status ? true: false,
        mdl.sid = sid;
        send(`${mdl.status ? 'bật': 'tắt'} tự rời nhóm dưới ${mdl.num}`, tid, mid);
    };
};
module.exports.handleEvent = function({
    api, event
}) {
    const {
        threadID: tid,
        senderID: sid,
        participantIDs: allID,
        isGroup
    } = event;
    const {
        sendMessage: send,
        removeUserFromGroup: rm,
        getCurrentUserID: botID
    } = api
    if (!isGroup) return;
    const mdl = global.cmds_autoleave;
    if (!mdl.status) return;
    if (allID.length < mdl.num && sid != botID()) return send(`Đã thiết lập rời nhóm dưới ${mdl.num} thành viên`, tid, async function() {
        await rm(botID(), tid, n => !!n ? console.error(n): send(`Rời nhóm dưới ${mdl.num} thành viên\nTid : ${tid}`, mdl.sid));
        });
};