/* Copyright (C) 2021 CEHunter30.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
*/


const {MessageType, GroupSettingChange, ChatModification, WAConnectionTest} = require('@adiwajshing/baileys');
const Asena = require('../events');
const Config = require('../config');

var CLR_DESC = ''
var FIN_DESC = ''
var CLE_DESC = ''
if (Config.LANG == 'TR') CLR_DESC = 'Sohbetteki tüm mesajları siler.', FIN_DESC = '🚮☑️ Sohbet temizlendi.', CLE_DESC = '🔃 Sohbet temizleniyor...'
if (Config.LANG == 'AZ') CLR_DESC = 'Söhbətdəki bütün mesajları silir.', FIN_DESC = '🚮☑️ Söhbət təmizləndi.', CLE_DESC = '🔃 Söhbət təmizlənir...'
if (Config.LANG == 'EN') CLR_DESC = 'Clears all the messages from the chat.', FIN_DESC = '🚮☑️ Chat cleared.', CLE_DESC = '🔃 The chat is clearing...'
if (Config.LANG == 'PT') CLR_DESC = 'Limpa todas as mensagens do chat.', FIN_DESC = '🚮☑️ Bate-papo limpo.', CLE_DESC = '🔃 O bate-papo está limpando...'
if (Config.LANG == 'RU') CLR_DESC = 'Удаляет все сообщения из чата.', FIN_DESC = '🚮☑️ Чат очищен.', CLE_DESC = '🔃 Чат очищается...'
if (Config.LANG == 'HI') CLR_DESC = 'चैट से सभी संदेशों को साफ़ करता है।', FIN_DESC = '🚮☑️ चैट साफ़ किया गया.', CLE_DESC = '🔃 चैट क्लियर हो रही है।...'
if (Config.LANG == 'ES') CLR_DESC = 'Forigas ĉiujn mesaĝojn de la babilejo.', FIN_DESC = '🚮☑️ Chat borrado.', CLE_DESC = '🔃 El chat se está aclarando...'
if (Config.LANG == 'ML') CLR_DESC = 'ചാറ്റിൽ നിന്നുള്ള എല്ലാ സന്ദേശങ്ങളും മായ്‌ക്കുന്നു.', FIN_DESC = '🚮☑️ ചാറ്റ് ക്ലിയർ ചെയ്തു.', CLE_DESC = '🔃 ചാറ്റ് മായ്‌ക്കുന്നു...'
if (Config.LANG == 'ID') CLR_DESC = 'Menghapus semua pesan dari obrolan.', FIN_DESC = '🚮☑️ Obrolan dihapus.', CLE_DESC = '🔃 Obrolan sedang dihapus...'

async function checkImAdmin(message, user = message.client.user.jid) {
    var grup = await message.client.groupMetadata(message.jid);
    var sonuc = grup['participants'].map((member) => {
        if (member.id.split('@')[0] === user.split('@')[0] && member.isAdmin) return true; else; return false;
    });
    return sonuc.includes(true);
}

Asena.addCommand({pattern: 'clear ?(.*)', fromMe: true, desc: CLR_DESC, dontAddCommandList: true}, (async (message, match) => {

    await message.client.sendMesssage(message.jid, CLE_DESC, MessageType.text);
    await message.client.modifyChat (match[1] == '' ? message.jid : match [1], ChatModification.delete);
    await message.client.sendMesssage(message.jid, FIN_DESC, MessageType.text);
}));
