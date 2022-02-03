const Asena = require('../events');
const exec = require('child_process').exec;
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const os = require("os");
const axios = require('axios');
const Config = require('../config');
let wk = Config.WORKTYPE == 'public' ? false :
var pic = ''
if (Config.LANG == 'TR') pic = 'Rastgale anime fotoğrafı gönderir.'
if (Config.LANG == 'EN') pic = 'Sends random anime photo.'
if (Config.LANG == 'AZ') pic = 'Təsadüfi anime şəkli göndərir.'
if (Config.LANG == 'RU') pic = 'Отправляет случайное аниме-фото.'
if (Config.LANG == 'ES') pic = 'Envía una foto de anime aleatoria.'
if (Config.LANG == 'PT') pic = 'Envia foto de anime aleatória.'
if (Config.LANG == 'ML') pic = 'ക്രമരഹിതമായ ആനിമേഷൻ ഫോട്ടോ അയയ്ക്കുന്നു.'
if (Config.LANG == 'HI') pic = 'यादृच्छिक एनीमे फोटो भेजता है।'
if (Config.LANG == 'ID') pic = 'Mengirim foto anime acak.'

Asena.addCommand({pattern: 'animepic', fromMe: wk, desc: pic}, (async (message, match) => {
    var root = new Array ();

    root[0] = "waifu";
    root[1] = "neko";
    root[2] = "shinobu";
    root[3] = "megumin";
    root[4] = "awoo";
    var i = Math.floor(5*Math.random())
    var rootData = root[i]
    var exdata = await axios.get('https://api.waifu.pics/sfw/' + rootData)

    await message.client.sendMessage(message.jid,Buffer.from(exdata.data.url), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Made By WhatsFOX'})

}));
