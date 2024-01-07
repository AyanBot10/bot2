module['exports']['config'] = {
    name: 'emoji',
    version: '1.0.0',
    hasPermssion: 0,
    credits: 'MR CHAND',
    description: 'Encrypt messages to Emoji and vice versa',
    commandCategory: 'Tool',
    usages: 'emojitroll en <text>\x0Aor\x0Aemojitroll de <text>',
    cooldowns: 5
};
module['exports']['run'] = async ({
    event,
    api,
    args
}) => {
    var text = args['slice'](1)['join'](' ');
    var type = args[0];
    if (type == 'encode' || type == 'en') {
        text = text['toLowerCase']();
        text = text['replace'](/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ|a/g, '\uD83D\uDE00');
        text = text['replace'](/b/g, '\uD83D\uDE03');
        text = text['replace'](/c/g, '\uD83D\uDE01');
        text = text['replace'](/đ|d/g, '\uD83D\uDE05');
        text = text['replace'](/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ|e/g, '\uD83E\uDD70');
        text = text['replace'](/f/g, '\uD83E\uDD23');
        text = text['replace'](/g/g, '\uD83E\uDD72');
        text = text['replace'](/h/g, '\u263A\uFE0F');
        text = text['replace'](/ì|í|ị|ỉ|ĩ|i/g, '\uD83D\uDE0A');
        text = text['replace'](/k/g, '\uD83D\uDE07');
        text = text['replace'](/l/g, '\uD83D\uDE09');
        text = text['replace'](/m/g, '\uD83D\uDE12');
        text = text['replace'](/n/g, '\uD83D\uDE1E');
        text = text['replace'](/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ|o/g, '\uD83D\uDE19');
        text = text['replace'](/p/g, '\uD83D\uDE1F');
        text = text['replace'](/q/g, '\uD83D\uDE15');
        text = text['replace'](/r/g, '\uD83D\uDE42');
        text = text['replace'](/s/g, '\uD83D\uDE43');
        text = text['replace'](/t/g, '\u2639\uFE0F');
        text = text['replace'](/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ|u/g, '\uD83D\uDE21');
        text = text['replace'](/v/g, '\uD83D\uDE0D');
        text = text['replace'](/x/g, '\uD83D\uDE29');
        text = text['replace'](/ỳ|ý|ỵ|ỷ|ỹ|y/g, '\uD83D\uDE2D');
        text = text['replace'](/w/g, '\uD83D\uDE33');
        text = text['replace'](/z/g, '\uD83D\uDE20');
        text = text['replace'](/ /g, '.');
        text = text['replace'](/\u0300|\u0301|\u0303|\u0309|\u0323/g, '');
        text = text['replace'](/\u02C6|\u0306|\u031B/g, '');
        return api['sendMessage'](text, event['threadID'], event['messageID'])
    } else {
        if (type == 'decode' || type == 'de') {
            text = text['toLowerCase']();
            text = text['replace'](/😀/g, 'a');
            text = text['replace'](/😃/g, 'b');
            text = text['replace'](/😁/g, 'c');
            text = text['replace'](/😅/g, 'd');
            text = text['replace'](/🥰/g, 'e');
            text = text['replace'](/🤣/g, 'f');
            text = text['replace'](/🥲/g, 'g');
            text = text['replace'](/☺️/g, 'h');
            text = text['replace'](/😊/g, 'i');
            text = text['replace'](/😇/g, 'k');
            text = text['replace'](/😉/g, 'l');
            text = text['replace'](/😒/g, 'm');
            text = text['replace'](/😞/g, 'n');
            text = text['replace'](/😙/g, 'o');
            text = text['replace'](/😟/g, 'p');
            text = text['replace'](/😕/g, 'q');
            text = text['replace'](/🙂/g, 'r');
            text = text['replace'](/🙃/g, 's');
            text = text['replace'](/☹️/g, 't');
            text = text['replace'](/😡/g, 'u');
            text = text['replace'](/😍/g, 'v');
            text = text['replace'](/😩/g, 'x');
            text = text['replace'](/😭/g, 'y');
            text = text['replace'](/😳/g, 'w');
            text = text['replace'](/😠/g, 'z');
            text = text['replace'](/\./g, ' ');
            return api['sendMessage'](text, event['threadID'], event['messageID'])
        } else {
            return api['sendMessage']('Wrong syntax\x0Aemoji en <text>\x0A,or\x0Aemoji de <text>', event['threadID'], event['messageID'])
        }
    }
}