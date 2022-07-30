//════════════════════════════//
//Este es un bot nuevo el desarrollo
//Si cambia algo de aqui
//Por favor
//De dejar crédito.
//════════════════════════════//

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'your key',
}


//aumto functioner
global.autoTyping = false //auto tying in gc (true to on, false to off)
global.autoreadpmngc = false //auto reading in gc and pm (true to on, false to off)
global.autoReadGc = false //auto reading in gc (true to on, false to off)
global.autoRecord = false //auto recording (true to on, false to off)
global.available = true //auto available (true to on, false to off)

//semt menu variants
global.vidmenu = fs.readFileSync("./media/theme/Cheems-bot.mp4") //gif and video menu

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.vcardowner = ['56977774748'] //numero del owner
global.ownername = "░▒▓█►─═ 𝓝𝓸𝓿𝓪𝓫𝓸𝓽-ℳ𝓓 ═─◄█▓▒░" //nombre
global.ytname = "loli" //canal de Youtube 
global.socialm = "GitHub: " //github
global.location = "argentina" //lugar
//__________________
global.vcardowner1 = ['51935116539'] //número
global.ownername1 = "░▒▓█►─═ 𝑀𝐼𝒮𝒜𝐸𝐿 ═─◄█▓▒░" //nombre
global.ytname1 = "" //canal YouTube
global.socialm1 = "GitHub: " //gitbut 
global.location1 = "Peru" //lugar
//__________________
global.vcardowner2 = ['5218992059110'] //número
global.ownername2 = "desarrollo" //nombre
global.ytname2 = "" //canal YouTube
global.socialm2 = "GitHub: " //gitbut 
global.location2 = "México" //lugar
//__________________
global.vcardowner3 = ['34623442554'] //numero
global.ownername3 = "desarrollo" //nombre
global.ytname3 = "" //canal de Youtube 
global.socialm3 = "GitHub: " //gitbut 
global.location3 = "España" //lugar

//bot bomdy 
global.owner = ['56977774748' , '51935116539']
global.ownertag = '447441419651' //ur tag number
global.botname = '𝐍𝐨𝐯𝐚𝐛𝐨𝐭-𝐌𝐃' //ur bot name
global.linkz = "https://youtu.be/WiIqCdiDjFo" //your theme url which will be displayed on whatsapp
global.websitex = "https://youtube.com/channel/UC9b3UIVnVb5eQt7_Y-Qz-3A" //ur website to be displayed
global.botscript = 'https://github.com/elrebelde21/Novabot-MD-' //script link
global.reactmoji = "😎" //ur menu react emoji
global.themeemoji = "💎" //ur theme emoji
global.packname = "𝘚𝘛𝘐𝘊𝘒𝘌𝘙  𝘉𝘠" //ur sticker watermark packname
global.author = "𝓝𝓸𝓿𝓪𝓫𝓸𝓽-ℳ𝓓" //ur sticker watermark author

//Bot theme media
global.thum = fs.readFileSync("./media/theme/cheemspic.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./media/theme/cheemspic.jpg") //ur logo pic
global.err4r = fs.readFileSync("./media/theme/cheemspic.jpg") //ur error pic
global.thumb = fs.readFileSync("./media/theme/cheemspic.jpg") //ur thumb pic

//damtabase
global.premium = ['573224618996'] //ur premium numbers
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []

//omther
global.sessionName = 'session'
global.antitags = true
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: 'listo ✓',
    admin: '[ ⚠️ 𝐀𝐋𝐄𝐑𝐓𝐀 ⚠️ ] 𝙴𝚂𝚃𝙴 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝚂𝙾𝙻𝙾 𝙿𝚄𝙴𝙳𝙴 𝚂𝙴𝚁 𝚄𝚃𝙸𝙻𝙸𝚉𝙰𝙳𝙾 𝙿𝙾𝚁 𝙰𝙳𝙼𝙸𝙽𝚂 𝙳𝙴𝙻 𝙶𝚁𝚄𝙿𝙾!',
    botAdmin: '[ ⚠️ 𝐀𝐋𝐄𝐑𝐓𝐀 ⚠️ ] 𝙿𝙰𝚁𝙰 𝙿𝙾𝙳𝙴𝚁 𝚄𝚂𝙰𝚁 𝙴𝚂𝚃𝙴 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙴𝚂 𝙽𝙴𝙲𝙴𝚂𝙰𝚁𝙸𝙾 𝚀𝚄𝙴 𝙴𝙻 𝙱𝙾𝚃 𝚂𝙴𝙰 𝙰𝙳𝙼𝙸𝙽, 𝙰𝙲𝙴𝙽𝙳𝙴𝚁 𝙰 𝙰𝙳𝙼𝙸𝙽 𝙴𝚂𝚃𝙴 𝙽𝚄𝙼𝙴𝚁𝙾',
    owner: '[ ⚠️ 𝐀𝐋𝐄𝐑𝐓𝐀 ⚠️ ] 𝙴𝚂𝚃𝙴 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝚂𝙾𝙻𝙾 𝙿𝚄𝙴𝙳𝙴 𝚂𝙴𝚁 𝚄𝚃𝙸𝙻𝙸𝚉𝙰𝙳𝙾 𝙿𝙾𝚁 𝙴𝙻/𝙻𝙰 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾/𝙰 (𝙾𝚆𝙽𝙴𝚁) 𝙳𝙴𝙻 𝙱𝙾𝚃',
    group: '[ ⚠️ 𝐀𝐋𝐄𝐑𝐓𝐀 ⚠️ ] 𝙴𝚂𝚃𝙴 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝚂𝙾𝙻𝙾 𝙿𝚄𝙴𝙳𝙴 𝚂𝙴𝚁 𝚄𝚃𝙸𝙻𝙸𝚉𝙰𝙳𝙾 𝙴𝙽 𝙶𝚁𝚄𝙿𝙾𝚂!',
    private: '[ ⚠️ 𝐀𝐋𝐄𝐑𝐓𝐀 ⚠️ ] 𝙴𝚂𝚃𝙴 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝚂𝙾𝙻𝙾 𝙿𝚄𝙴𝙳𝙴 𝚂𝙴𝚁 𝚄𝚃𝙸𝙻𝙸𝚉𝙰𝙳𝙾 𝙴𝙽 𝙲𝙷𝙰𝚃 𝙿𝚁𝙸𝚅𝙰𝙳𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃!',
    bot: '[ ⚠️ 𝐀𝐋𝐄𝐑𝐓𝐀 ⚠️ ] 𝙴𝚂𝚃𝙴 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝚂𝙾𝙻𝙾 𝙿𝚄𝙴𝙳𝙴 𝚂𝙴𝚁 𝚄𝚃𝙸𝙻𝙸𝚉𝙰𝙳𝙾 𝙿𝙾𝚁 𝙼𝙾𝙳𝙴𝚁𝙰𝙳𝙾𝚁𝙴𝚂 𝚈 𝙴𝙻/𝙻𝙰 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾/𝙰 (𝙾𝚆𝙽𝙴𝚁) 𝙳𝙴𝙻 𝙱𝙾𝚃',
    wait: '𝙴𝚗 𝚙𝚛𝚘𝚌𝚎𝚜𝚘...',
    linkm: 'y link?',
    error: 'Error!!',
    endLimit: '[ ⚠️ 𝐀𝐋𝐄𝐑𝐓𝐀 ⚠️ ] su límite de agotado, el límite de restablecera cada 12 hora',
    ban: '[ ⚠️ 𝐀𝐋𝐄𝐑𝐓𝐀 ⚠️ ] has sigo baneado por el dueño del bot, si quiere que no te baneen, habla con el owner.',
    nsfw: '[ ⚠️ 𝐀𝐋𝐄𝐑𝐓𝐀 ⚠️ ] la función nsfw no está activado',
    banChat: '[ ⚠️ 𝐀𝐋𝐄𝐑𝐓𝐀 ⚠️ ] el bot fue baneado el este grupo, habla con owner para desbanea'
}
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./media/theme/cheemspic.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.thumb = fs.readFileSync('./drips.jpg')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
